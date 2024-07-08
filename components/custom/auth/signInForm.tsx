"use client";

import { useState, useTransition } from "react";

import { signInSchema } from "@/lib/schema";

import { Icon } from "@iconify/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { primary } from "@/app/fonts";
import { signIn } from "@/actions/signIn";

const SignInForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      pin: "",
    },
  });

  function onSubmit(values: z.infer<typeof signInSchema>) {
    setError("");
    setSuccess("");

    startTransition(() => {
      signIn(values).then((res) => {
        if (res?.error) {
          form.reset();
          setError(res.error);
        }

        if (res?.success) {
          form.reset();
          setSuccess(res.success);
        }
      }).catch(() => setError("Something went wrong!"));
    });
  }

  return (
    <Form {...form}>
      <h1
        className={cn(
          primary.className,
          "tracking-wide uppercase font-thin text-4xl my-10"
        )}
      >
        kcl admin
      </h1>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 w-[90%] md:w-[30%] p-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Pin" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <br />
        <Button type="submit" className="w-full text-lg">
          {isPending ? (
            <Icon icon="ph:spinner-thin" className="animate-spin" />
          ) : (
            "Sign In"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
