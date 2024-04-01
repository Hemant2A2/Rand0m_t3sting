import { GoogleGenerativeAI } from "@google/generative-ai";

const api_key = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(api_key);


const TextResponseModel = async (prompt) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const result = await model.generateContent(prompt);
  const res = await result.response;
  const text = res.text();
  return text;
}

export default TextResponseModel;
