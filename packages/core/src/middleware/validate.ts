import { type ZodType } from "zod";
import { exceptionResponse } from "../response";
import { UnprocessableEntityError } from "../exceptions";
import { Request, Response, NextFunction } from "express";

export const validate = (
  schema: ZodType,
  type: "params" | "body" | "query" = "body",
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      const data = req[type];

      const result = schema.safeParse(data);
      if (result.success) return next();

      const extractedErrors = result.error.issues.map((issue) => ({
        [String(issue.path[0])]: issue.message.replace(/_/g, " "),
      }));

      if (extractedErrors.length > 0) {
        throw new UnprocessableEntityError(JSON.stringify(extractedErrors));
      }

      return next();
    } catch (err) {
      exceptionResponse(res, err);
    }
  };
};
