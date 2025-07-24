import { z } from "zod"

export const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(1, "Message is required").max(1000, "Message must be less than 500 characters"),
})

export type ContactFormData = z.infer<typeof ContactFormSchema>