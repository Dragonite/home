import { ContactFormSchema, ContactFormData } from '../schemas/contact-form'
import { z } from 'zod'

export interface ContactResponse {
  success: boolean
  message: string
}

export interface ContactError {
  error: string
  details?: Array<{
    field: string
    message: string
  }>
}

export const submitContactForm = async (data: ContactFormData): Promise<ContactResponse> => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const responseData = await response.json()

  if (!response.ok) {
    // Handle validation errors specifically
    if (response.status === 400 && responseData.details) {
      const validationErrors = responseData.details
        .map((detail: { field: string; message: string }) => detail.message)
        .join(', ')
      throw new Error(validationErrors)
    }
    
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return responseData
}
