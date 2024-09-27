"use server";

import { createClient } from "@supabase/supabase-js";

export default async function joinWaitlist(
  email: string
): Promise<{ success: false; error?: string } | { success: true }> {
  const supabase = createClient(
    `${process.env.DB_URL}`,
    `${process.env.DB_KEY}`
  );

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Invalid email address" };
  }

  try {
    const exist = await supabase
      .from("emails")
      .select("*")
      .eq("email", email);

    console.log(exist)

    if (exist.data && exist.data.length > 0) {
      return { success: false, error: "Email already exists" };
    }

    const res = await supabase.from("emails").insert({ email });
    if (res.error?.code) {
      console.error(res.error);
      return { success: false, error: res.error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: err.message };
  }
}
