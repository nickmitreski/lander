import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get current file path (ES modules don't have __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// GROQ API configuration
const GROQ_API_KEY = process.env.GROQ_API_KEY || "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"; // Use an environment variable in production
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

// Middleware
app.use(cors());
app.use(express.json()); // Using express.json instead of body-parser

// System message for Instagram growth services
const CHATBOT_SYSTEM_CONTEXT = `
You are a professional Instagram Boost Assistant for a service that helps people grow their Instagram accounts. 
Be concise and helpful - all responses should be as short as possible while still being helpful.
You sound casual and friendly, like a real assistant - not a chatbot.

Key services offered:
- Follower growth (organic methods, 1000+ real followers monthly)
- Engagement boost (likes, comments, shares)
- Content strategy optimization
- Profile audits and improvements
- Personalized support with a dedicated account manager

Common questions:
- Pricing: $24.99/month for full growth services
- Results: Usually visible within the first week
- Methods: Only organic, no bots or fake accounts
- Cancellation: Can cancel anytime, no contracts
`;

// System context for blog content generation
const BLOG_SYSTEM_CONTEXT = `
You are an expert content creator specializing in Instagram growth strategies and social media marketing. 
Your task is to create in-depth, SEO-optimized blog posts that provide real value to readers.

Follow these guidelines for all blog content:
1. Create content that incorporates relevant SEO keywords naturally
2. Use a conversational but authoritative tone
3. Include practical, actionable advice that readers can implement immediately
4. Structure content with clear headings and subheadings
5. Back assertions with data or industry expertise where possible
6. Format content to be easily scannable with short paragraphs and bullet points
7. Include a compelling introduction and conclusion
8. Focus on providing genuine value, not just keyword stuffing

Your content should position our brand as a thought leader in Instagram growth while subtly highlighting 
our services without being overly promotional.

Common topics to cover include:
- Instagram algorithm insights
- Content strategy optimization
- Follower growth techniques
- Engagement rate improvement
- Instagram Stories and Reels strategies
- Hashtag optimization
- Instagram analytics interpretation
`;

// Detect if a request is for blog content generation
const isBlogContentRequest = (messages) => {
  if (!messages || messages.length === 0) return false;
  
  const lastMessage = messages[messages.length - 1];
  
  return lastMessage.content && (
    lastMessage.content.includes('Write a detailed, informative, and SEO-optimized blog post') ||
    lastMessage.content.includes('blog post about')
  );
};

// Chat API endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request format' });
    }

    console.log('Received chat request with messages:', messages);

    // Determine if this is a blog content request or a regular chat request
    const isBlogRequest = isBlogContentRequest(messages);
    console.log(`Request type: ${isBlogRequest ? 'Blog content generation' : 'Regular chat'}`);

    // Format messages based on request type
    const systemContext = isBlogRequest ? BLOG_SYSTEM_CONTEXT : CHATBOT_SYSTEM_CONTEXT;
    
    const groqMessages = [
      { 
        role: "system", 
        content: systemContext
      },
      ...messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }))
    ];

    console.log('Sending request to GROQ API');

    // Configure request parameters based on content type
    const requestParams = {
      model: isBlogRequest ? "llama3-70b-8192" : "llama3-8b-8192",
      messages: groqMessages,
      temperature: isBlogRequest ? 0.7 : 0.5,
      max_tokens: isBlogRequest ? 2000 : 200,
    };

    // Make request to GROQ API
    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify(requestParams)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("GROQ API error:", errorData);
      return res.status(response.status).json({ 
        error: `API request failed with status ${response.status}`,
        details: errorData
      });
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;
    
    console.log(`Received response from GROQ API: ${isBlogRequest ? 'Blog content (truncated)' : assistantMessage}`);
    
    return res.json({ message: assistantMessage });
  } catch (error) {
    console.error("Error in chat endpoint:", error);
    return res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Export app for testing
export default app; 