"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ButtonComponent from "./button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  state: z.string().min(3, {
    message: "Enter a valid emotional state",
  }),
  event: z.string().min(10, {
    message: "Enter a valid event",
  }),
  triggers: z.string().min(3, {
    message: "Enter a valid trigger",
  }),
});

export default function ThoughtForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      state: "",
      event: "",
      triggers: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    form.reset();
    console.log(values);
    toast.success("Success!");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm text-main font-medium">
                Emotional State
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-[1px] border-solid border-[#0000001A] px-3 py-2 rounded-[6px] bg-white text-black">
                    <SelectValue placeholder="How are you feeling?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="happy">Happy</SelectItem>
                  <SelectItem value="sad">Sad</SelectItem>
                  <SelectItem value="calm">Calm</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
              <FormDescription className="text-xs text-[#00000080]">
                Select from the options
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="event"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm text-main font-medium">
                Significant Events
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Note down important events"
                  {...field}
                  className="border-[1px] border-solid border-[#0000001A] px-3 py-2 rounded-[6px] bg-white text-black"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="triggers"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm text-main font-medium">
                Triggers
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="What triggered your feelings?"
                  {...field}
                  className="border-[1px] border-solid border-[#0000001A] px-3 py-2 rounded-[6px] bg-white text-black"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonComponent type="submit" text="Log Thoughts" />
      </form>
    </Form>
  );
}
