"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, OctagonAlert } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";

const formSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email(),
    password: z.string().min(1, "Password is required"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const SignUpView = () => {

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsPending(true);
    setError(null);
    authClient.signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password,
        callbackURL: '/',
      },
      {
        onSuccess: () => {
          setIsPending(false);
        },
        onError: ({ error }) => {
          setError(error.message);
          setIsPending(false);
        },
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 gap-4">
      <Image src="/neura.svg" alt="Neura" width={50} height={50} />
      <div className="flex flex-col p-2 items-center justify-center">
      <h1 className="text-2xl font-bold">Let&apos;s get you started</h1>
      <p className="text-sm text-muted-foreground">
        Create your account to get started
      </p>
      </div>
      <Card className="overflow-hidden p-0 !border-0 w-full max-w-md">
        <CardContent className="grid p-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="grid gap-4 w-full">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="John Doe"
                              {...field}
                              className={cn(
                                "h-14 w-full min-w-0 rounded-md md:text-sm"
                              )}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="mail@example.com"
                              {...field}
                              className={cn(
                                "h-14 w-full min-w-0 rounded-md md:text-sm"
                              )}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="********"
                              {...field}
                              className={cn(
                                "h-14 w-full min-w-0 rounded-md md:text-sm"
                              )}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="********"
                              {...field}
                              className={cn(
                                "h-14 w-full min-w-0 rounded-md md:text-sm"
                              )}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {!!error && (
                      <Alert
                        variant="destructive"
                        className="bg-destructive/10 flex items-center gap-2 border-0 text-left w-full"
                      >
                        <OctagonAlert className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}
                    <Button
                      disabled={isLoading}
                      type="submit"
                      className="w-full cursor-pointer"
                      size="lg"
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        "Create Your Account"
                      )}
                    </Button>
                    

                    <p className="text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link
                        href="/sign-in"
                        className="text-primary hover:underline"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </Form>
          {/* <div className="bg-radial from-[#3f71af] to-[#264b79] relative hidden md:flex flex-col gap-y-4 items-center justify-center">
            <img src="/neura.svg" alt="Neura" className="w-[70px] h-[70px]" />
          </div> */}
        </CardContent>
      </Card>
      <p className="text-sm text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <Link href="/terms" className="text-primary hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default SignUpView;
