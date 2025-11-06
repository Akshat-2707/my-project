import { callOpenAI } from "./openaiService.js";
import { callDialogflow } from "./dialogflowService.js";

export const getProvider = (provider) => {
  if (provider === "openai") return callOpenAI;
  if (provider === "dialogflow") return callDialogflow;
  throw new Error("Unsupported provider");
};
