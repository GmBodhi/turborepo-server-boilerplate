import * as z from "zod";

export const turtleCreate = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, "Name must contain at least 2 characters")
    .max(50, "Name must be maximum 50 characters"),
});

export const turtleDelete = z.object({
  id: z
    .string({ required_error: "Id is required" })
    .refine((val) => !isNaN(Number(val)), {
      message: "Id must be a valid number in string format",
    }),
});
