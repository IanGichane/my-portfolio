"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
 
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string()
    .email({
      message: "Must be a valid email address.",
    })
    .nonempty({
      message: "Email is required.",
    }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

const MyForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      subject: "",
      message: "",
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (

    <Card className=" p-10 ">

    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
      {/* full name */}
      <FormField
        control={form.control}
        name="fullname"
        render={({ field }) => (
          <FormItem>
         
            <FormControl>
              <Input placeholder="Full Name" {...field} />
            </FormControl>
       
    
          </FormItem>
        )}
        />
        {/* Email */}
         <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
         
            <FormControl>
              <Input placeholder="Email" {...field} />
            </FormControl>
       
    
          </FormItem>
        )}
        />
        {/* Subject */}
         <FormField
        control={form.control}
        name="subject"
        render={({ field }) => (
          <FormItem>
         
            <FormControl>
              <Input placeholder="subject" {...field} />
            </FormControl>
       
    
          </FormItem>
        )}
        />
         <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
         
            <FormControl>
              <Textarea  placeholder="Message" {...field} />
            </FormControl>
       
    
          </FormItem>
        )}
        />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
        </Card>
  )
}

export default MyForm
