import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    SYSTEME_IO_API: z.string().min(1),
  },
  experimental__runtimeEnv: process.env,
});
