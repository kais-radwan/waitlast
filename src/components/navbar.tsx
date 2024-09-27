import { Button, Link } from "@nextui-org/react";
import { IconChevronRight } from "@tabler/icons-react";
import ShinyButton from "./ui/shiny-button";

export default function Navbar() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full flex items-center justify-center gap-3 z-40 p-5">
        <div className="p-3 px-6 border rounded-full flex items-center w-[90%] md:w-[60%] bg-[#121212] backdrop-blur-md overflow-hidden">
          <h1 className="text-md min-w-max font-bold">Waitlast</h1>
          <div className="w-full flex items-center justify-end gap-3">
            <div className="text-sm ">
              <span className="opacity-60">Built by</span>{" "}
              <Link href="https://x.com/kais_rad" target="_blank" className="underline">
                @kais_rad
              </Link>
            </div>
            {/* <Button
              size="sm"
              variant="bordered"
              as={Link}
              href="https://github.com/kais-radwan/start-kit"
              target="_blank"
              className="font-semibold text-white rounded-full"
            >
              Get template
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
