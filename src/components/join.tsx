"use client";

import joinWaitlist from "@/actions/join";
import { useState } from "react";
import { toast } from "sonner";
import ShinyButton from "./ui/shiny-button";

export default function Join() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = async () => {
    if (loading || done) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        toast.error("Invalid email address");
        return;
    }

    setLoading(true);

    try {
      const res = await joinWaitlist(email);
      if (res.success) {
        toast.success("Successfully joined waitlist");
        setDone(true);
        setEmail("");
      } else {
        toast.error(res.error ?? "Something went wrong");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="max-w-md flex items-center gap-3 text-sm outline-none bg-accent/20 backdrop-blur border border-white/10 rounded-full p-2 px-4 z-10"
        style={{
          boxShadow: "0px 20px 80px 0px rgba(255, 255, 255, .1)",
        }}
      >
        <input
          className="outline-none bg-transparent max-w-24 md:max-w-48"
          placeholder="Enter your email..."
          value={email}
          onInput={(e) => setEmail(e.currentTarget.value)}
          autoFocus
        />
        <ShinyButton loading={loading} onClick={submit}>
          Join waitlist
        </ShinyButton>
      </div>
    </>
  );
}
