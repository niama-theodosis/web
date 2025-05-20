"use server";

import { env } from "@/app/env";
import { ContactValues, ERROR_EXISTING, zContactFailure, zContactInput, zContactSuccess } from "@/lib/systemeio";
import { ActionState, rhfErrorsFromZod } from "@/lib/utils";

export async function createContact(
  _prevState: ActionState<ContactValues> | undefined,
  formData: FormData,
): Promise<ActionState<ContactValues>> {
  try {
    const data = Object.fromEntries(formData.entries()) as ContactValues;
    const res = zContactInput.safeParse(data);
    if (!res.success) return { status: 422, data, errors: rhfErrorsFromZod(res.error) };

    const input = res.data;
    const response = await fetch("https://api.systeme.io/api/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "X-API-Key": env.SYSTEME_IO_API,
      },
      body: JSON.stringify(input),
    });
    const created = await response.json();
    if (zContactSuccess.safeParse(created).success) return { status: 201 };

    const [{ code }] = zContactFailure.parse(created).violations;
    return { status: code === ERROR_EXISTING ? 409 : 400 };
  } catch {
    return { status: 400 };
  }
}
