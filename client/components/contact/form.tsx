"use client"

import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useSheet } from "@/contexts/sheet"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { useMutation } from "@tanstack/react-query"
import { submitContactForm } from "@/lib/api/contact"
import { ContactFormData, ContactFormSchema } from "@/lib/schemas/contact-form"
 
function ContactForm() {
  const { closeSheet } = useSheet();
  const contactMutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      // Only executes on successful API response
      closeSheet()
      toast.success("Message sent successfully", {
        description: "I'll get back to you as soon as possible."
      })
      
      // Reset form
      form.reset()
    },
    onError: (error) => {
      toast.error("Something went wrong", {
        description: "Please try again later."
      })
      console.error('Contact submission error:', error)
    },
  })

  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: ContactFormData) {
    contactMutation.mutate(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Haolin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="haolin@haolin.dev" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Let's get a coffee!" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="secondary" type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default ContactForm;
