# Instagram Growth Chatbot Integration

This project adds a GROQ-powered chatbot to the website, providing Instagram growth service assistance to users. The chatbot is designed to be concise, friendly, and helpful.

## Features

- Floating chat button in the bottom-right corner
- Responsive chat window
- Integration with GROQ API for intelligent responses
- Secure API key handling via server-side proxy
- Context-aware conversations about Instagram growth services

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. Install the required dependencies:

```bash
npm install express cors body-parser node-fetch dotenv
```

2. Create a `.env` file in the root directory with your GROQ API key:

```
GROQ_API_KEY=your_groq_api_key
```

3. Start the development server:

```bash
# Terminal 1: Start the Express server
node server.js

# Terminal 2: Start the Vite development server  
npm run dev
```

## How It Works

The system consists of three main parts:

1. **Frontend Component** (`src/components/ui/Chatbot.tsx`): Provides the user interface for the chatbot.

2. **API Proxy** (`vite.config.ts`): Configured to proxy requests to the Express server to keep the API key secure.

3. **Express Server** (`server.js`): Handles requests to the GROQ API, keeping sensitive information server-side.

## Customization

You can customize the chatbot by modifying the following:

- **System Context**: Edit the `SYSTEM_CONTEXT` in `server.js` to adjust the chatbot's personality and knowledge.
- **Appearance**: Modify the styles in `Chatbot.tsx` to match your website's design.
- **Model Parameters**: Adjust temperature, max tokens, and other parameters in the GROQ API request for different response styles.

## Security Considerations

- The GROQ API key is stored in a `.env` file and only used server-side.
- Never expose the API key in client-side code.
- In production, ensure your API key is stored in your deployment platform's environment variables. 