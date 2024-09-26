import Navbar from "@/components/navbar";
import { Cover } from "@/components/ui/cover";
import ShinyButton from "@/components/ui/shiny-button";
import { IconChevronRight, IconGitFork } from "@tabler/icons-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center pt-36 text-center gap-6">
        <div
          className="p-1 px-4 border rounded-full text-sm bg-accent/10 flex items-center gap-2 relative overflow-hidden border-white/10"
          style={{
            boxShadow: "0px 0px 140px 0px rgba(255, 255, 255, .1)",
          }}
        >
          <div
            className="p-1 px-2 border rounded-full text-xs bg-accent/10 text-blue-300 border-blue-300/30 relative flex items-center justify-center overflow-hidden"
            style={{
              // boxShadow: "0px 20px 100px 0px #60a5fa",
            }}
          >
            <div className="h-[1px] w-4 bg-blue-400 absolute top-0"></div>
            <div className="h-[1px] w-4 bg-blue-400 absolute top-0 blur-sm"></div>
            <div className="h-[1px] w-4 bg-blue-400 absolute top-0 blur-sm"></div>
            <div className="h-[1px] w-4 bg-blue-400 absolute top-0 blur-sm"></div>
            <div className="h-[1px] w-4 bg-blue-400 absolute top-0 blur-md"></div>
            <div className="h-[1px] w-4 bg-blue-400 absolute top-0 blur-md"></div>
            <div className="h-[1px] w-4 bg-blue-400 absolute top-0 blur-lg"></div>
            <div className="h-2 w-4 bg-blue-400 absolute top-0 blur-lg"></div>
            limited offer
          </div>{" "}
          clone this template for free
          <IconChevronRight size={15} />
        </div>
        <h1
          className="text-6xl"
          style={{
            textShadow: "0px 0px 10px rgba(255, 255, 255, .4)",
          }}
        >
          <span className="opacity-80">Ship Your</span>{" "}
          <Cover className="">Waitlist</Cover>
          <br />
          <span className="opacity-80">In Minutes</span>
        </h1>
        <div className="opacity-80 max-w-lg">
          Give your idea the waitlist it deserves, and {"don't"} let bad ones
          affect how you validate your ideas
        </div>
        <div className="max-w-md flex items-center gap-3 text-sm outline-none bg-accent/10 border rounded-full p-2 px-4">
          <input
            className="outline-none bg-transparent max-w-48"
            placeholder="Enter your email..."
          />
          <ShinyButton>Join waitlist</ShinyButton>
        </div>
      </div>
    </>
  );
}
