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
  pace: z.number().min(1, {
    message: "Feild cannot be empty",
  }),
  duration: z.number().min(1, {
    message: "Feild cannot be empty",
  }),
  sound: z.string().min(3, {
    message: "Select a sound",
  }),
});

export default function CostumizationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pace: undefined,
      duration: undefined,
      sound: "",
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
          name="pace"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm text-main font-medium">
                Breathing Pace
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter pace in seconds"
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
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm text-main font-medium">
                Duration
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter duration in minutes"
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
          name="sound"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm text-main font-medium">
                Background Sounds
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-[1px] border-solid border-[#0000001A] px-3 py-2 rounded-[6px] bg-white text-black">
                    <SelectValue placeholder="Select from options" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Nature">Nature</SelectItem>
                  <SelectItem value="Zen">Zen</SelectItem>
                  <SelectItem value="Calm">Calm</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonComponent type="submit" text="Start Now" />
      </form>
    </Form>
  );
}
