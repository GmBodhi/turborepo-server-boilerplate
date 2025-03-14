import * as z from "zod";

export const create = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, "Name must contain at least 2 characters")
    .max(50, "Name must be maximum 50 characters"),
});
