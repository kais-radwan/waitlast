import Navbar from "@/components/navbar";
import { BackgroundBeamsWithCollision } from "@/components/ui/backgrounds/beams";
import { Cover } from "@/components/ui/cover";
import ShinyButton from "@/components/ui/shiny-button";
import { IconChevronRight, IconGift, IconGitFork } from "@tabler/icons-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <img
        src="https://i.gifer.com/origin/6b/6bb14b1f413cac62614e813c19d9d94f_w200.gif"
        className="fixed top-0 left-0 w-screen h-screen inset-0 z-10 opacity-[10%]"
      />
      <BackgroundBeamsWithCollision>
        <div className="w-full flex flex-col items-center justify-center h-screen text-center gap-6 z-20">
          <div
            className="p-1 px-4 border rounded-full text-sm bg-accent/10 flex items-center gap-2 relative overflow-hidden border-white/10"
            style={{
              boxShadow: "0px 0px 140px 0px rgba(255, 255, 255, .1)",
            }}
          >
            <div
              className="p-1 px-2 border rounded-full text-xs bg-accent/10 text-blue-300 border-blue-300/30 relative flex items-center justify-center overflow-hidden"
              style={
                {
                  // boxShadow: "0px 20px 100px 0px #60a5fa",
                }
              }
            >
              {/* <div className="h-[1px] w-4 bg-blue-400 absolute top-0"></div> */}
              <div className="h-[1px] w-4 bg-blue-400 absolute top-0 blur-sm"></div>
              <div className="h-[1px] w-4 bg-blue-400 absolute top-0 blur-sm"></div>
              <div className="h-[1px] w-4 bg-blue-400 absolute top-0 blur-sm"></div>
              <div className="h-[1px] w-4 bg-blue-400 absolute top-0 blur-md"></div>
              <div className="h-[1px] w-4 bg-blue-400 absolute top-0 blur-md"></div>
              <div className="h-[1px] w-4 bg-blue-400 absolute top-0 blur-lg"></div>
              <div className="h-2 w-4 bg-blue-400 absolute top-0 blur-lg"></div>
              launch offer
            </div>{" "}
            join the waitlist for a free template
            <IconGift size={15} />
            <div className="absolute -top-20 w-1 h-48 bg-gradient-to-b from-white to-transparent blur-sm opacity-30" />
            <div className="absolute -top-20 w-1 h-24 bg-gradient-to-b from-white to-transparent blur-lg opacity-30" />
            <div className="absolute -top-0 w-1 h-24 bg-gradient-to-b from-white to-transparent blur-lg opacity-30" />
            <div className="absolute -top-20 w-1 h-48 bg-gradient-to-b from-white to-transparent blur-sm rotate-[30deg] mr-10 opacity-30" />
            <div className="absolute -top-20 w-1 h-48 bg-gradient-to-b from-white to-transparent blur-lg rotate-[30deg] mr-10 opacity-30" />
            <div className="absolute -top-20 w-1 h-48 bg-gradient-to-b from-white to-transparent blur-sm rotate-[-30deg] ml-10 opacity-30" />
            <div className="absolute -top-20 w-1 h-48 bg-gradient-to-b from-white to-transparent blur-lg rotate-[-30deg] ml-10 opacity-30" />
            <div className="absolute -top-20 w-10 h-10 bg-gradient-to-b from-white to-transparent blur-lg opacity-30" />
          </div>
          <div className="absolute w-1 h-48 bg-gradient-to-b from-white to-transparent blur-md opacity-30" />
          <div className="absolute w-1 h-48 bg-gradient-to-b from-white to-transparent blur-md rotate-[30deg] mr-20 opacity-30" />
          <div className="absolute w-1 h-48 bg-gradient-to-b from-white to-transparent blur-lg rotate-[30deg] mr-20 opacity-30" />
          <div className="absolute w-1 h-48 bg-gradient-to-b from-white to-transparent blur-md rotate-[-30deg] ml-20 opacity-30" />
          <div className="absolute w-1 h-48 bg-gradient-to-b from-white to-transparent blur-lg rotate-[-30deg] ml-20 opacity-30" />
          <h1 className="text-6xl">
            <span className="opacity-80">Ship Your</span>{" "}
            <Cover className="text-white">Waitlist</Cover>
            <br />
            <span className="opacity-80">In Minutes</span>
          </h1>
          <div className="opacity-80 max-w-lg">
            Create and customize a beautiful waitlist effortlessly, using modern templates — no coding required
          </div>
          <div
            className="max-w-md flex items-center gap-3 text-sm outline-none bg-accent/20 backdrop-blur border border-white/10 rounded-full p-2 px-4 z-10"
            style={{
              boxShadow: "0px 20px 80px 0px rgba(255, 255, 255, .1)",
            }}
          >
            <input
              className="outline-none bg-transparent max-w-48"
              placeholder="Enter your email..."
              autoFocus
            />
            <ShinyButton>Join waitlist</ShinyButton>
          </div>
          <div className="text-sm opacity-60">
            100+ developers joined already!
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}
