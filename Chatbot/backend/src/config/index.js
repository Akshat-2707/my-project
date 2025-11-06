export const config = {
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    model: process.env.OPENAI_MODEL || "gpt-3.5-turbo",
  },
  dialogflow: {
    projectId: process.env.DIALOGFLOW_PROJECT_ID,
    credentialsPath: process.env.DIALOGFLOW_CREDENTIALS,
  },
  jwtSecret: process.env.JWT_SECRET || "supersecret",
  rateLimit: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 20,
  }
};
