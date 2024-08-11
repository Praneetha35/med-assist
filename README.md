# AI First Aid Chatbot with OpenAI, AWS Bedrock, Pinecone & Next.js

This project is an AI-driven first aid chatbot application designed to provide users with quick, reliable, and accurate first aid information. The chatbot leverages cutting-edge AI technologies, including OpenAI, AWS Bedrock's Anthropic Claude Haiku, and Pinecone for Retrieval Augmented Generation (RAG). The front-end is built using Next.js with JavaScript and Material UI, offering a seamless user experience.

## Features

- **AI-Driven First Aid Assistance**: Provides users with immediate and accurate first aid guidance for various medical scenarios.
- **Advanced AI Models**: Integrates OpenAI and AWS Bedrock's Claude Haiku for generating intelligent, context-aware responses.
- **Retrieval Augmented Generation (RAG)**: Utilizes Pinecone and AWS Bedrock knowledge bases for advanced retrieval-based queries and response generation.
- **Next.js & JavaScript**: A robust and scalable front-end framework ensuring high performance and flexibility.
- **Material UI**: A modern and customizable UI framework to enhance user interaction and design.

## Technologies Used

- **OpenAI**: Powers the chatbot with state-of-the-art language models.
- **AWS Bedrock (Anthropic Claude Haiku)**: Adds advanced AI capabilities and integration with AWS's suite of tools.
- **Pinecone**: Provides a vector database for efficient and scalable search operations, essential for RAG.
- **Next.js**: A React framework for server-side rendering, ensuring fast loading times and SEO-friendly pages.
- **JavaScript**: The programming language used to develop the application logic.
- **Material UI**: A UI library for building responsive and customizable front-end components.

## Getting Started

### Prerequisites

- **Node.js** (v14.x or later)
- **npm** or **yarn**
- **AWS Account** with access to Bedrock services
- **OpenAI API Key**
- **Pinecone Account & API Key**

### Installation

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
