"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { OctagonAlert } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password is required"),
});

export const SignInView = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    authClient.signIn.email({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen p-4 ">
      <img src="/neura.svg" alt="Neura" className="w-[50px] h-[50px]" />
      <h1 className="text-2xl font-bold">Sign in</h1>
      <Card className="overflow-hidden p-0 !border-0 w-full max-w-md">
        <CardContent className="grid p-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="grid gap-4 w-full">
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
                                "h-10 w-full min-w-0 rounded-md md:text-sm"
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
                                "h-10 w-full min-w-0 rounded-md md:text-sm"
                              )}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {true && (
                      <Alert
                        variant="destructive"
                        className="bg-destructive/10 flex items-center gap-2 border-0 "
                      >
                        <OctagonAlert className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                          Invalid email or password
                        </AlertDescription>
                      </Alert>
                    )}
                    <Button
                      type="submit"
                      className="w-full bg-[#0f0f0f] cursor-pointer"
                    >
                      Sign in
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Don&apos;t have an account?{" "}
                      <Link href="/sign-up">Sign up</Link>
                    </p>
                    <div className="flex items-center w-full my-2">
                      <div className="flex-1 h-px bg-border" />
                      <span className="mx-3 text-sm text-muted-foreground whitespace-nowrap">Or continue with</span>
                      <div className="flex-1 h-px bg-border" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <Button
                        variant="outline"
                        className="w-full bg-white text-black"
                      >
                        Google
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full bg-white text-black"
                      >
                        Apple
                      </Button>
                    </div>
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
    </div>
  );
};

export default SignInView;
