import Link from "next/link";
import Image from "next/image";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";

export function Footer() {
  return (
    <footer className="bg-[#00065F] py-20 relative overflow-hidden">
      <Image
        src="/images/lines.png"
        width={200}
        height={200}
        alt="Illustration"
        className="absolute bottom-[-5%] w-[32] right-4 rotate-12 pointer-events-none"
      />
      <div className="w-[85%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2">
            <div className="flex flex-col gap-6">
              {/* Logo */}
              <Image
                src="/images/stocksavvy-white.png"
                width={100}
                height={100}
                alt="Logo"
                className="w-32 md:min-w-40 md:max-w-40"
              />
              {/* Footer text */}
              <div className="text-white text-sm text-gray-300">
                <p>
                  We help digital and physical store fronts monitor/track sales
                  with our innovative software unlocking exponential growth.
                  Look no further! Stocksavvy is here to revolutionize the way
                  you handle inventory.
                </p>
              </div>
            </div>
          </div>
          {/* Nav links  */}
          <ul className="text-white grid md:grid-cols-2 gap-3 pt-10 text-sm md:gap-6 text-semibold md:text-[16px]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
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
        </div>
        {/* Horizontal line */}
        <div className="mt-10 h-[1px] w-full bg-white"></div>
        <div className="text-white flex flex-col md:flex-row md:justify-between gap-3 md:gap-6 mt-5 md:items-center">
          <small>© 2024 Metclan. All Right Reserved</small>
          <ul className="flex items-center gap-3">
            <li className="bg-white p-2 text-[#00065F] rounded-full">
              <Link
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61558156179180"
                className=""
              >
                <GrFacebookOption />
              </Link>
            </li>
            <li className="bg-white p-2 text-[#00065F] rounded-full">
              <Link
                target="_blank"
                href="https://www.instagram.com/stocksavvy.io/"
                className=""
              >
                <BsInstagram />
              </Link>
            </li>
            <li className="bg-white p-2 text-[#00065F] rounded-full">
              <Link
                target="_blank"
                href="https://twitter.com/stocksavvy_io"
                className=""
              >
                <BsTwitterX />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
