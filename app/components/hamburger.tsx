"use client";
//import hooks and libs
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="md:hidden cursor-pointer">
      {/* Hamburger Menu Button */}
      <div className="text-3xl">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={28} />
      </div>
      {/* Hamburger Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-[9.1%] left-0 h-screen w-screen overflow-hidden bg-[#525CEB] z-[100]`}
          >
            <div className="max-w-[85%] mx-auto mt-10 flex-col flex gap-4">
              <ul className="flex flex-col gap-4 text-white">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/learn">Learn</Link>
                </li>
                <li>
                  <Link href="/faqs">FAQs</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className="border px-4 py-2 text-center text-white rounded-[5px]">
                  <Link href="https://stocksavvy.metclan.com/login">Login</Link>
                </li>
                <li className="border px-4 py-2 text-center text-[#525CEB] rounded-[5px] bg-white">
                  <Link href="">Get started</Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
