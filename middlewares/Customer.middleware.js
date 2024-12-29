import CustomerModel from "../models/Customer.js";

export async function validateApiKey(req, res, next) {
  const { apiKey } = req.query;
  console.log("🚀 ~ validateApiKey ~ apiKey:", apiKey);

  if (!apiKey) {
    return res.status(401).json({ message: "API key is required" });
  }

  const parts = apiKey.split("$");
  console.log("🚀 ~ validateApiKey ~ parts:", parts);
  if (parts[0] !== "web-") {
    return res.status(401).json({ message: "Invalid API key format" });
  }

  const customerId = parts[1];
  const email = parts[3];

  try {
    console.log("Query parameters:", {
      cusId: customerId,
      email: email,
      apiKey: apiKey,
    });
    const customer = await CustomerModel.findOne({
      cusId: customerId,
      email: email,
      apiKey: apiKey,
    });
    console.log("🚀 ~ validateApiKey ~ customer:", customer);

    if (!customer) {
      return res.status(401).json({ message: "Invalid API key" });
    }

    req.customer = customer; // Attach customer info to the request
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
