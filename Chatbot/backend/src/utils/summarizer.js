export const summarizeHistory = (messages) => {
  if (messages.length > 5) {
    const latest = messages.slice(-3).map(m => m.content).join(" ");
    return `Summary of earlier messages... ${latest}`;
  }
  return null;
};
