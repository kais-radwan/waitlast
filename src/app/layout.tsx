import type { Metadata } from "next";
import { Inter, Gowun_Batang } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/components/providers";
import { Toaster } from "@/components/ui/sonner"

const inter = Gowun_Batang({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Starter Kit",
  description: "Simple starter kit for future websites & designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "text-foreground antialiased leading-normal before:fixed before:inset-0 before:-z-40 before:[background-image:url('/grainy-bg.svg')] before:opacity-[0.030] before:top-0 before:left-0 dark",
          inter.className
        )}
      >
        <Providers>{children}</Providers>
        <Toaster />
        {/* <img className="absolute top-0 left-0 w-screen h-screen inset-0 z-0 opacity-[1%]" src="/grainy-bg.svg" /> */}
      </body>
    </html>
  );
}
