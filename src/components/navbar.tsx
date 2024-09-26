import { Button, Link } from "@nextui-org/react";
import { IconChevronRight } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full flex items-center justify-center gap-3 z-40 p-5">
        <div className="p-3 px-7 border rounded-full flex items-center w-[60%] bg-accent/30 backdrop-blur-md overflow-hidden">
          <h1 className="text-md min-w-max font-bold">Waitlast</h1>
          <div className="w-full flex items-center justify-end gap-3">
            <Button
              size="sm"
              color="secondary"
              variant="light"
              as={Link}
              href="https://github.com/kais-radwan/start-kit"
              target="_blank"
              className="text-white/60 hover:text-white rounded-full"
            >
              About us
            </Button>
            <Button
              size="sm"
              color="primary"
              as={Link}
              href="https://github.com/kais-radwan/start-kit"
              target="_blank"
              className="rounded-full font-semibold"
              endContent={<IconChevronRight size={15} />}
              style={{
                boxShadow: "0px 0px 50px 0px rgba(255, 255, 255, .2)"
              }}
            >
              Get template
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
