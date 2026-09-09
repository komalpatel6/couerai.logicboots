import { z } from "zod";

export const demoRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters.")
    .max(100, "Full name cannot exceed 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address.")
    .max(150, "Email cannot exceed 150 characters."),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number cannot exceed 30 characters.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .max(2000, "Message cannot exceed 2000 characters.")
    .optional()
    .or(z.literal("")),
});

export const contactMessageSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters.")
    .max(100, "Full name cannot exceed 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address.")
    .max(150, "Email cannot exceed 150 characters."),
  subject: z
    .string()
    .trim()
    .max(150, "Subject cannot exceed 150 characters.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Message must contain at least 10 characters.")
    .max(3000, "Message cannot exceed 3000 characters."),
});

export type DemoRequestData = z.infer<typeof demoRequestSchema>;
export type ContactMessageData = z.infer<typeof contactMessageSchema>;
