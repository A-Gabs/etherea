
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getOracleGuidance = async (userPrompt: string) => {
  const model = 'gemini-3-flash-preview';
  
  const response = await ai.models.generateContent({
    model,
    contents: userPrompt,
    config: {
      systemInstruction: `Eres el Oráculo de etherea.ia. Proporcionas orientación espiritual, mística y energética. 
      Tu tono es misterioso, empático, sabio y poético. 
      Utilizas metáforas relacionadas con las estrellas, la energía, los espíritus y el destino.
      Si el usuario pregunta sobre "retornos" o "endulzamientos", explícales la ética energética de manera mística.
      Responde siempre en español.`,
      temperature: 0.9,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          message: { type: Type.STRING, description: "The mystical main response." },
          insight: { type: Type.STRING, description: "A short, profound sentence of advice." },
          cardName: { type: Type.STRING, description: "A relevant tarot card name if applicable." }
        },
        required: ["message", "insight"]
      }
    }
  });

  return JSON.parse(response.text);
};
