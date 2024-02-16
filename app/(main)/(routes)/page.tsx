import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import {ModeToggle} from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="container">
      <UserButton afterSignOutUrl="/" />
        <ModeToggle />
    </div>
  );
}
