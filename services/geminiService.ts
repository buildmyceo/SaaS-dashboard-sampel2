import { GoogleGenAI } from "@google/genai";

export const fetchBusinessInsights = async (metrics: any) => {
  try {
    // Safely check for process.env to avoid ReferenceError in browser environments
    const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : '';
    
    if (!apiKey) {
      console.warn("No API Key found for Gemini");
      return "AI Insights require an API Key. Please configure it to see predictions.";
    }

    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash-latest';

    const prompt = `
      You are a senior business analyst AI for a SaaS platform called NexusOS.
      Analyze the following business metrics JSON and provide 3 distinct, high-value actionable insights.
      
      Metrics: ${JSON.stringify(metrics)}

      Format the response as a simple HTML string with <ul> and <li> tags. Do not use markdown. 
      Focus on revenue prediction, risk assessment, and operational efficiency.
      Keep it professional, concise, and executive-level.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error fetching AI insights:", error);
    return "Unable to generate insights at this moment. Please try again later.";
  }
};