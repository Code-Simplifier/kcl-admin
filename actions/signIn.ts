import { auth } from "@/lib/firebase";
import { signInSchema } from "@/lib/schema";
import { signInWithEmailAndPassword } from "firebase/auth";
import { z } from "zod";

export async function signIn(values: z.infer<typeof signInSchema>) {
  const validatedFields = signInSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, pin } = validatedFields.data;

  try {
    const res = await signInWithEmailAndPassword(auth, email, pin);

    console.log(res);

    return { success: "Successfully signed in!" };
  } catch (err) {
    return { error: "Invalid credentials!" };
  }
}
