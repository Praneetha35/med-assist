

import {
    BedrockAgentRuntimeClient,
    InvokeAgentCommand,
    RetrieveAndGenerateCommand,
  } from "@aws-sdk/client-bedrock-agent-runtime";
  
  function processChunk(chunk) {
    // Extract the text response part
    const textResponsePart = chunk.attribution.citations
      .map(citation => citation.generatedResponsePart.textResponsePart)
      .find(part => part !== undefined);
  
    if (!textResponsePart) {
      throw new Error("No text response part found in the chunk.");
    }
  
    let text = textResponsePart.text || '';
  
    text = text.replace(/<sources>.*?<\/sources>/gs, '');

    text = text.trim();
  
    return text;
  }
  
  

const invokeBedrockAgent = async (prompt, sessionId) => {
    const client = new BedrockAgentRuntimeClient({ region: "us-east-1" });
  
    const agentId = process.env.AGENT_ID;
    const agentAliasId = process.env.AGENT_ALIAS_ID;
    
    const command = new InvokeAgentCommand({
      agentId,
      agentAliasId,
      sessionId,
      inputText: prompt,
    });
    
  
    try {
      const response = await client.send(command);
  
      if (response.completion === undefined) {
        throw new Error("Completion is undefined");
      }

      const readableStream = new ReadableStream({
        async start(controller) {
            let accumulatedText = '';

            const sourceMapping = new Map();
            let sourceCounter = 1; 
        
            for await (let chunkEvent of response.completion) {
              const chunkBytes = chunkEvent.chunk.bytes;
              const chunkText = new TextDecoder("utf-8").decode(chunkBytes);
              accumulatedText += chunkText;
              accumulatedText = accumulatedText.replace(/<sources>(.*?)<\/sources>/gs, (match, sourceContent) => {
                if (!sourceMapping.has(sourceContent)) {
                  sourceMapping.set(sourceContent, sourceCounter++);
                }
                return `[${sourceMapping.get(sourceContent)}]`;
              });
              accumulatedText = accumulatedText.trim();
              controller.enqueue(new TextEncoder().encode(accumulatedText));
            }
        
            const sourceMappingText = Array.from(sourceMapping.entries())
              .map(([source, number]) => `[${number}] ${source}`)
              .join('\n');
        
            if (sourceMapping.size > 0) {
                controller.enqueue(new TextEncoder().encode(`\nSources:\n${sourceMappingText}`));
            }
        
            // Close the stream when done
            controller.close();
          },
      });
  
      return new Response(readableStream, {
        headers: {
          'Content-Type': 'text/plain',
          'Transfer-Encoding': 'chunked',
        },
      });
  
    //   return { completion };
    } catch (err) {
      console.error(err);
    }
  };
  
  
  export async function POST(req) {
    const data = await req.json();
    const messages = data.messages;
    const lastMessage = messages[messages.length - 1];  
    const lastText = lastMessage.content[lastMessage.content.length - 1].text;  

    const response = await invokeBedrockAgent(lastText,data.sessionId);
    return response;
  }
  