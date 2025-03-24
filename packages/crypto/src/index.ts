import { createHash, randomBytes } from "crypto";

export function generateHash(
  digest: "base64" | "base64url" | "hex",
  payload: Record<string, string>,
) {
  const timestamp = Date.now();

  const payloadString = Object.entries(payload)
    .map(([key, value]) => `${key}-${value}`)
    .join("-");

  const baseString = `${timestamp}-${payloadString}`;

  const hash = createHash("md5").update(baseString).digest(digest);

  const uniqueId = `${timestamp}-${hash}`;

  return uniqueId;
}

export function generateId() {
  const timestamp = Date.now();

  const randomValue = randomBytes(8).toString("hex");
  const uniqueId = `${timestamp}-${randomValue}`;

  return uniqueId;
}
