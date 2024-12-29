import crypto from "crypto";
// Utility function to generate random string
export function generateRandomString(length) {
  return crypto.randomBytes(length).toString("hex");
}































