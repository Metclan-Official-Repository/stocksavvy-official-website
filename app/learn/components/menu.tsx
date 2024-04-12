"use client";
//import react essentials
import { useEffect, useState } from "react";
//import icons
import { PiCaretRightBold } from "react-icons/pi";
//import data
import { docLinks } from "@/app/contants/docLinks";
//import components
import { LearnLinksWithLinksSmall } from "./learnLinksSmall";

export function LearnMenu() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  function handleMenu() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="md:hidden sticky top-[87px] border-y w-full cursor-pointer bg-white">
      <div className="relative">
        <div className="w-[85%] mx-auto">
          <div className="flex items-center gap-3 py-5" onClick={handleMenu}>
            <PiCaretRightBold
              className={`${
                isOpen ? "rotate-90" : "rotate-0"
              } transition pointer-events-none`}
            />
            <span>Menu</span>
          </div>
          {isOpen && (
            <div className="bg-white w-screen absolute left-0 h-[600px] overflow-scroll pb-20">
              <ul className="w-[85%] mx-auto flex flex-col gap-3">
                {docLinks.map((docLink) => (
                  <LearnLinksWithLinksSmall
                    prop={docLink}
                    key={docLink.link}
                    handleMenu={() => handleMenu()}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
