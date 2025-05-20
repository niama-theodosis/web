"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { defaultContactValues, zContactValues, type ContactValues } from "@/lib/systemeio";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail } from "lucide-react";
import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createContact } from "../actions";

const messages = new Map(
  Object.entries({
    409: "Ton inscription est déja effective.",
    400: "Une erreur est survenue lors de votre inscription",
    201: "Ton inscription à La Voix de Theodôsis est confirmée",
  }),
);

// ROOT ************************************************************************************************************************************
export function Newsletter({ className }: { className?: string }) {
  const [state, action, isPending] = useActionState(createContact, undefined);

  const form = useForm<ContactValues>({
    mode: "onTouched",
    resolver: zodResolver(zContactValues),
    errors: state?.errors,
    defaultValues: state?.data ?? defaultContactValues,
  });

  const { control, formState, handleSubmit, reset } = form;

  useEffect(() => {
    if (!state?.status) return;
    if (state.status === 201) toast.success(messages.get("201"));
    else toast.error(messages.get(state.status.toString()));
    if ([201, 409].includes(state?.status ?? 400)) reset();
  }, [reset, state]);

  return (
    <Card
      className={cn(
        "bg-secondary text-secondary-foreground w-full rounded-none border-0 shadow-2xl lg:max-w-2xl lg:rounded-2xl",
        className,
      )}
    >
      <Form {...form}>
        <form action={action} onSubmit={formState.isValid ? undefined : handleSubmit(() => true)} className="space-y-8">
          <CardContent className="flex flex-col gap-8">
            <p className="text-center text-xl font-bold italic">
              Si ces mots font écho, je t&apos;invite à rejoindre La Voix de Theodôsis, ma newsletter.
            </p>
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
              <FormField
                control={control}
                name="firstname"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Prénom</FormLabel>
                    <FormControl>
                      <Input placeholder="Ton prénom" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="surname"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                      <Input placeholder="Ton nom" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Courriel</FormLabel>
                  <FormControl>
                    <Input placeholder="Ton courriel" {...field} />
                  </FormControl>
                  <FormDescription className="text-white italic">
                    Ton courriel est utilisé uniquement pour t’envoyer La Voix de Theodôsis
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button color="primary" size="lg" disabled={isPending} className="flex gap-2 text-xl">
              {isPending ? <Loader2 className="animate-spin" /> : <Mail className="size-5" />}
              <span className="font-bold uppercase">Je m&apos;inscris</span>
            </Button>
          </CardContent>
        </form>
      </Form>
    </Card>
  );
}
