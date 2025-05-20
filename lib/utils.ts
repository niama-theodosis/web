import { clsx, type ClassValue } from "clsx";
import { FieldErrors, FieldValues } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { ZodError } from "zod";

// STYLES **********************************************************************************************************************************
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// SCHEMAS *********************************************************************************************************************************
export function rhfErrorsFromZod<TFieldValues extends FieldValues = FieldValues>(error: ZodError): FieldErrors<TFieldValues> {
  const { fieldErrors, formErrors } = error.flatten(({ code: type, message }) => ({ message, type }));
  return {
    root: formErrors[0],
    ...Object.fromEntries(Object.entries(fieldErrors).map(([name, errors]) => [name, errors?.[0]])),
  } as FieldErrors<TFieldValues>;
}

// TYPES ***********************************************************************************************************************************
export type ActionState<D extends FieldValues = FieldValues> = {
  data?: D;
  errors?: FieldErrors<D>;
  status: ActionStatus;
};

export type ActionStatus = 201 | 400 | 409 | 422;
