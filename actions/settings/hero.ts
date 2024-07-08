import { db } from "@/lib/firebase";
import { heroSettingsSchema } from "@/lib/schema";
import { doc, setDoc } from "firebase/firestore";
import { z } from "zod";

export async function setHeroData(values: z.infer<typeof heroSettingsSchema>) {
  const validtedFields = heroSettingsSchema.safeParse(values);

  let heroData = validtedFields.data;

  if (!validtedFields.success) {
    return { error: "Invalid Fields!" };
  }

  try {
    const docRef = doc(db, "dashboard", "heroSettings");
    await setDoc(docRef, heroData, { merge: true });

    return { success: "Settings updated successfully!" }
  } catch {
    return { error: "Something went wrong!" };
  }
}
