"use client";

import { useEffect, useState } from "react";

import { setHeroData } from "@/actions/settings/hero";

import { getHeroData } from "@/hooks/getFirestoreData";

import { heroSettingsSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Icon } from "@iconify/react";

import Error from "@/components/custom/error";
import Success from "@/components/custom/success";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

const HeroSettingsForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [hero, setHero] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { toast } = useToast();

  useEffect(() => {
    async function fetchHeroData() {
      setLoading(true);
      const data = await getHeroData();
      setHero(data);
      setLoading(false);
    }

    fetchHeroData();
  }, []);

  const form = useForm<z.infer<typeof heroSettingsSchema>>({
    resolver: zodResolver(heroSettingsSchema),
    defaultValues: {
      collegeTitle: hero?.collegeTitle || "",
      collegeDescription: hero?.collegeDescription || "",
      collegeLocation: hero?.collegeLocation || "",
    },
  });

  function onSubmit(values: z.infer<typeof heroSettingsSchema>) {
    setIsSubmitting(true);
    try {
      setHeroData(values).then((res) => {
        if (res?.error) {
          form.reset();
          setIsSubmitting(false);
          return toast({
            title: "Error",
            description: res.error,
            duration: 3000,
            variant: "destructive",
          });
        }

        if (res?.success) {
          form.reset();
          setIsSubmitting(false);
          return toast({
            title: "Success",
            description: res.success,
            duration: 3000,
            variant: "success",
          });
        }
      });
    } catch {
      setIsSubmitting(false);
      return toast({
        title: "Error",
        description: "Please try again!",
        duration: 3000,
        variant: "destructive",
      });
    }
  }
  return (
    <Form {...form}>
      <h1 className="text-3xl text-slate-400 font-medium">Hero Content</h1>
      <br />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-5"
      >
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="collegeTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Title</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={loading ? "Loading..." : hero?.collegeTitle}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="collegeDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Description</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={
                      loading ? "Loading..." : hero?.collegeDescription
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="collegeLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Location</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="resize-none border-border bg-input"
                  placeholder={loading ? "Loading..." : hero?.collegeLocation}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <br />
        <Button type="submit" className="text-lg w-fit">
          {isSubmitting ? <Icon icon="line-md:uploading-loop" /> : "Save"}
        </Button>
      </form>
    </Form>
  );
};

export default HeroSettingsForm;
