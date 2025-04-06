import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("Gemini API key is not set in environment variables");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 2048,
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

export async function generateInterviewQuestion(type, difficulty) {
  const prompt = `Generate a ${difficulty} level ${type} interview question. 
  Include a brief explanation of what the interviewer is looking for in the answer.
  Format the response as JSON with the following structure:
  {
    "question": "the interview question",
    "explanation": "what the interviewer is looking for",
    "hints": ["hint 1", "hint 2", "hint 3"]
  }`;

  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig,
      safetySettings,
    });

    const response = await result.response;
    const text = response.text();
    
    // Clean up the response text to ensure it's valid JSON
    const cleanedText = text.replace(/```json\n|\n```/g, '').trim();
    return JSON.parse(cleanedText);
  } catch (error) {
    console.error("Error generating interview question:", error);
    throw new Error("Failed to generate interview question. Please try again.");
  }
}

export async function evaluateAnswer(question, answer) {
  const prompt = `Evaluate the following answer to the interview question.
  Question: ${question}
  Answer: ${answer}
  
  Provide a detailed evaluation in JSON format with the following structure:
  {
    "score": number between 0 and 100,
    "strengths": ["strength 1", "strength 2"],
    "improvements": ["area for improvement 1", "area for improvement 2"],
    "suggestedAnswer": "a better way to answer the question"
  }`;

  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig,
      safetySettings,
    });

    const response = await result.response;
    const text = response.text();
    
    // Clean up the response text to ensure it's valid JSON
    const cleanedText = text.replace(/```json\n|\n```/g, '').trim();
    return JSON.parse(cleanedText);
  } catch (error) {
    console.error("Error evaluating answer:", error);
    throw new Error("Failed to evaluate answer. Please try again.");
  }
} 