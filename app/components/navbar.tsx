"use client";
//import react essentials
import { useState } from "react";
//import next essentials
import Image from "next/image";
import Link from "next/link";
//import context
import { useGlobalContext } from "../context/store";
//import icons
import { IoMdArrowForward, IoIosArrowDown } from "react-icons/io";
import { HamburgerMenu } from "./hamburger";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
export function Navbar() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { country, setCountry } = useGlobalContext();
  return (
    <nav className="py-5 border-[#D6D8FF] border-b-[1.2px] z-10 bg-white">
      <div className="flex justify-between items-center w-[85%] max-w-[1201px] mx-auto gap-4">
        {/* Logo starts here */}
        <Link href={"/"} className="">
          <Image
            src="/images/logo.png"
            width={215}
            height={53}
            alt="Logo"
            className="w-32 md:min-w-40 md:max-w-40"
          />
        </Link>
        {/* Logo ends here */}
        {/* Navigation links start here */}
        <ul className="flex gap-6 items-center text-gray-700 [&>*:hover]:text-black hidden md:flex">
          <li>
            <Link href={"/"}>Home</Link>
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
        {/* Navigation links end here */}
        {/* Login & Signup links start end */}
        <ul className="flex gap-6 items-center hidden md:flex">
          <li>
            <Link
              href="https://stocksavvy.metclan.io/login"
              className="bg-[#525CEB] px-4 py-2 text-white rounded-[5px] whitespace-nowrap flex gap-1 items-center"
            >
              <span>Sign in </span>
              <IoMdArrowForward />
            </Link>
          </li>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger>
              <li className="flex items-center gap-1 cursor-pointer">
                {country === "nigeria" ? (
                  <Image
                    src="/images/nigeria.png"
                    width={50}
                    height={50}
                    alt="Nigeria"
                    className="rounded-full w-6 h-6 flex items-center justify-center"
                  />
                ) : country === "uganda" ? (
                  <Image
                    src="/images/ugandan.png"
                    width={50}
                    height={50}
                    alt="Nigeria"
                    className="rounded-full w-6 h-6 flex items-center justify-center"
                  />
                ) : (
                  <Image
                    src="/images/world.png"
                    width={50}
                    height={50}
                    alt="Nigeria"
                    className="rounded-full w-6 h-6 flex items-center justify-center"
                  />
                )}
                <span>
                  <IoIosArrowDown />
                </span>
              </li>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Select Region/Country</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-3 mt-3">
                <div
                  className={`flex gap-3 hover:bg-[#525CEB1A] p-4 rounded-[5px] transition cursor-pointer ${
                    country === "nigeria" && "bg-[#525CEB1A]"
                  }`}
                  onClick={() => {
                    setCountry("nigeria");
                    setOpenDialog(false);
                  }}
                >
                  <Image
                    src="/images/nigeria.png"
                    width={50}
                    height={50}
                    alt="Nigeria"
                    className="rounded-full w-6 h-6 flex items-center justify-center"
                  />
                  <span className="text-gray-700">Nigeria</span>
                </div>
                <div
                  className={`flex gap-3 hover:bg-[#525CEB1A] p-4 rounded-[5px] transition cursor-pointer ${
                    country === "uganda" && "bg-[#525CEB1A]"
                  }`}
                  onClick={() => {
                    setCountry("uganda");
                    setOpenDialog(false);
                  }}
                >
                  <Image
                    src="/images/ugandan.png"
                    width={50}
                    height={50}
                    alt="Nigeria"
                    className="rounded-full w-6 h-6 flex items-center justify-center"
                  />
                  <span className="text-gray-700">Uganda</span>
                </div>
                <div
                  className={`flex gap-3 hover:bg-[#525CEB1A] p-4 rounded-[5px] transition cursor-pointer ${
                    country === "global" && "bg-[#525CEB1A]"
                  }`}
                  onClick={() => {
                    setCountry("global");
                    setOpenDialog(false);
                  }}
                >
                  <Image
                    src="/images/world.png"
                    width={50}
                    height={50}
                    alt="Nigeria"
                    className="rounded-full w-6 h-6 flex items-center justify-center"
                  />
                  <span className="text-gray-700">Global</span>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </ul>
        {/* Login & Signup links end here */}
        {/* Hamburger menu starts here*/}
        <HamburgerMenu />
        {/* Hamburger menu ends here*/}
      </div>
    </nav>
  );
}
