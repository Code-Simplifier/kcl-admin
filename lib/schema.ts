import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Email is required!" }),
  pin: z.string().min(1, { message: "Pin is required!" }),
});

export const heroSettingsSchema = z.object({
  collegeTitle: z.string().min(1, { message: "College title is required!" }),
  collegeDescription: z
    .string()
    .min(1, { message: "College description is required!" }),
  collegeLocation: z
    .string()
    .min(1, { message: "College location is required!" }),
});
