import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

let sessionId = null;

export const sendMessage = async (message) => {
  const res = await API.post("/chat", { message, sessionId });
  sessionId = res.data.sessionId; // save session
  return res.data.reply;
};
