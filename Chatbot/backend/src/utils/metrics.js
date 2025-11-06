export const logMetrics = (type, data) => {
  console.log(`[METRIC] ${type}:`, JSON.stringify(data, null, 2));
};
