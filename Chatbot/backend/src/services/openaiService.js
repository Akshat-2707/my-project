import axios from "axios";
import { config } from "../config/index.js";

export const callOpenAI = async (message) => {
  try {
    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: config.openai.model,
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${config.openai.apiKey}`,
        },
      }
    );

    return res.data.choices[0].message.content;
  } catch (err) {
    console.error("OpenAI error:", err.message);
    throw new Error("Failed to call OpenAI");
  }
};
