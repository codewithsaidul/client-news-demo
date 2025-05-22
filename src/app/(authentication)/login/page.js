"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

// Validation schema for username and password
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const Login = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values) {
    console.log(values); // { username: "value", password: "value" }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-news-headline">
      <div className="bg-news-dark shadow-2xl py-16 px-8 w-[40%] text-white">
        <div className="flex flex-col justify-center items-center mb-10 gap-y-5">
          <figure className="w-40 text-center">
            <Image
              src="/logo.webp"
              alt="news logo"
              width={100}
              height={100}
              className="w-full h-full"
            />{" "}
          </figure>

          <h2 className="text-2xl font-title font-bold">
            Authorized Access Only
          </h2>
        </div>
        <Form {...form} className="w-full">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Username field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center w-full">
              <Button type="submit" className="text-xl font-title py-6 px-7">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
