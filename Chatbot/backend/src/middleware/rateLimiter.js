let requests = {};

export const rateLimiter = (req, res, next) => {
  const userIp = req.ip;
  const now = Date.now();

  if (!requests[userIp]) requests[userIp] = [];

  requests[userIp] = requests[userIp].filter(ts => now - ts < 60000); // last 60s
  if (requests[userIp].length >= 10)
    return res.status(429).json({ error: "Rate limit exceeded" });

  requests[userIp].push(now);
  next();
};
