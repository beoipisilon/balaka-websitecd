import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../../../Components/ui/sheet";

export default function MobileSideBar() {
  return (
    <div className="p-3 flex justify-between items-center sm:hidden">
      <div className="text-2xl font-bold ml-8">
        <span className="text-white">KORA</span>
        <span className="text-[rgb(170,142,214)]">™</span>
      </div>
      <Sheet>
        <SheetTrigger>
          <div className="p-3 rounded-lg">
            <Menu size={28} color="#aa8ed6" />
          </div>
        </SheetTrigger>
        <SheetContent className="bg-kora-Neutral-kora-neutral-12 border-kora-Neutral-kora-neutral-11">
          <SheetHeader>
            <SheetDescription>
              <div className="flex flex-col py-8 w-full gap-3">
                <a
                  href="/"
                  className="text-kora-Neutral-kora-neutral-6 font-medium bg-kora-Neutral-kora-neutral-10 bg-opacity-50 py-3 rounded-md"
                >
                  INICIO
                </a>
                <a
                  href="/discord"
                  className="text-kora-Neutral-kora-neutral-6 font-medium bg-kora-Neutral-kora-neutral-10 bg-opacity-50 py-3 rounded-md"
                >
                  SUPORTE
                </a>
                <a
                  href="/commands"
                  className="text-kora-Neutral-kora-neutral-6 font-medium bg-kora-Neutral-kora-neutral-10 bg-opacity-50 py-3 rounded-md"
                >
                  COMANDOS
                </a>
                <a
                  href="/blog"
                  className="text-kora-Neutral-kora-neutral-6 font-medium bg-kora-Neutral-kora-neutral-10 bg-opacity-50 py-3 rounded-md"
                >
                  BLOG
                </a>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
