import { z } from "zod";

// CONST ***********************************************************************************************************************************
export const ERROR_EXISTING = "b8559cec-4cad-4b9a-b357-17757d34c9ed";

// SCHEMAS *********************************************************************************************************************************
export const zContactValues = z.object({
  email: z.string().email({ message: "Ce courriel est invalide" }),
  firstname: z.string().min(1, { message: "Ce champ est requis" }).min(2, { message: "Ce champ est trop court (2 min)" }),
  surname: z.string().min(1, { message: "Ce champ est requis" }).min(2, { message: "Ce champ est trop court (2 min)" }),
});
export type ContactValues = z.infer<typeof zContactValues>;

export const defaultContactValues: ContactValues = { email: "", firstname: "", surname: "" };

export const zContactInput = zContactValues.transform(({ email, firstname, surname }) => ({
  email,
  fields: [
    { slug: "first_name", value: firstname },
    { slug: "surname", value: surname },
  ],
  locale: "fr",
}));
export type ContactInput = z.infer<typeof zContactInput>;

export const zContactSuccess = z.object({ id: z.number() });
export const zContactFailure = z.object({ violations: z.object({ code: z.string() }).array() });
