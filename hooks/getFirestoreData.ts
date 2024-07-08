import { db } from "@/lib/firebase";

import { doc, getDoc } from "firebase/firestore";

export async function getHeroData() {
  const docRef = doc(db, "dashboard", "heroSettings");
  const docSnap = await getDoc(docRef);

  let heroData: any = {};

  if (docSnap.exists()) {
    heroData = docSnap.data();
  }

  return heroData;
}
