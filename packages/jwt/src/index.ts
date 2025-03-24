import * as jwt from "jsonwebtoken";
import type { JwtPayload, SignOptions } from "jsonwebtoken";

type SecretKey = "session" | "code";

const SECRETS = {
  session: process.env.SESSION_SECRET,
  code: process.env.CODE_SECRET,
};

interface AdditionalInfo {
  expiresIn?: string | number;
  secret: SecretKey;
}

function getSecret(secretType: SecretKey): string {
  const secret = SECRETS[secretType];
  if (!secret) {
    throw new Error(`Secret for "${secretType}" is not defined`);
  }
  return secret;
}

export function generateToken(
  payload: Record<string, unknown>,
  options: AdditionalInfo,
): string {
  const secretKey = getSecret(options.secret);

  const signOptions: SignOptions = {
    expiresIn: options.expiresIn as number | undefined,
  };

  return jwt.sign(payload, secretKey, signOptions);
}

export function verifyToken(
  token: string,
  options: AdditionalInfo,
): JwtPayload | string {
  try {
    const secretKey = getSecret(options.secret);
    return jwt.verify(token, secretKey);
  } catch {
    throw new Error("Invalid or expired token");
  }
}
