"use client";
//import libs
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
//unoirt icons
import { PiCaretRightBold } from "react-icons/pi";
type Prop = {
  prop: DocLink;
};
export function LearnLinksWithLinks({ prop }: Prop) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const learnLinksBig = prop.childrenLinks?.map((childrenLink) => (
    <li
      key={childrenLink.id}
      className="hover:text-black text-[14px] lg:text-[16px]"
    >
      <Link
        style={{
          color: childrenLink.link === pathname ? "#525CEB" : "black",
        }}
        href={childrenLink.link}
      >
        {childrenLink.title}
      </Link>
    </li>
  ));
  const [isTitleColorChanged, setIsTitleColorChanged] =
    useState<Boolean>(false);
  const doctitleRef = useRef(null);
  function handleDocOpen() {
    setIsOpen((prev) => !prev);
  }
  useEffect(() => {
    function changeTitleColor(ev: MouseEvent) {
      if (ev.target === doctitleRef?.current) {
        setIsTitleColorChanged(true);
      } else {
        setIsTitleColorChanged(false);
      }
    }
    document.addEventListener("click", changeTitleColor);
    return () => document.removeEventListener("click", changeTitleColor);
  }, []);
  return (
    <div>
      {prop.hasChildrenLinks ? (
        <div
          className="flex items-center justify-between gap-6 text-gray-700 hover:text-black cursor-pointer transition"
          onClick={handleDocOpen}
          ref={doctitleRef}
        >
          <Link
            href={prop.link}
            className="text-[14px] lg:text-[16px] text-black hover:text-black"
            style={{ color: isTitleColorChanged && "#525CEB" }}
          >
            {prop.title}
          </Link>
          <PiCaretRightBold
            className={`${
              isOpen ? "rotate-90" : "rotate-0"
            } transition pointer-events-none`}
          />
        </div>
      ) : (
        <Link
          className="text-[14px] lg:text-[16px] text-black"
          style={{ color: isTitleColorChanged && "#525CEB" }}
          onClick={handleDocOpen}
          ref={doctitleRef}
          href={prop.link}
        >
          {prop.title}
        </Link>
      )}
      {prop.hasChildrenLinks && (
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden px-4 border-l flex flex-col gap-3 mt-3"
            >
              {learnLinksBig}
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
