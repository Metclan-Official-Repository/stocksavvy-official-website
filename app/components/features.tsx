"use client";
//import libs
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
//import icons
import { HiMiniArrowRightCircle } from "react-icons/hi2";
//import animations
import { AnimatePresence, motion } from "framer-motion";

export function Features() {
  const [activeTab, setActiveTab] = useState<string>("trackProducts");
  return (
    <section className="bg-[#F5F7FC] py-20">
      <div className="w-[85%] mx-auto">
        <div>
          {/* Features intro */}
          <div className="">
            <div className="flex flex-col gap-4 lg:gap-6">
              <h2 className="text-center text-3xl lg:text-4xl font-bold">
                Features of <span className="text-[#525CEB]">Stocksavvy</span>
              </h2>
              <p className="text-[14px] lg:text-[16px] text-center text-gray-700">
                We help digital and physical store fronts monitor/track sales
                with our innovative software unlocking exponential growth. Look
                no further! Stocksavvy is here to revolutionize the way you
                handle inventory.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-10 whitespace-nowrap flex-col sm:flex-row">
          <div
            className={`px-4 py-2 rounded-[5px] border-[#525CEB] border-2 text-center hover:bg-[#525CEB] transition hover:text-white text-[#525CEB] cursor-pointer relative ${
              activeTab === "trackProducts"
                ? "bg-[#525CEB] text-white"
                : "bg-white"
            }`}
            onClick={() => setActiveTab("trackProducts")}
          >
            Track products
            {activeTab === "trackProducts" && (
              <div className="h-4 w-4 bg-[#525CEB] rotate-45 absolute right-1/2"></div>
            )}
          </div>
          <div
            className={`px-4 py-2 rounded-[5px] border-[#525CEB] border-2 text-center hover:bg-[#525CEB] transition hover:text-white text-[#525CEB] cursor-pointer relative ${
              activeTab === "stayInLoop"
                ? "bg-[#525CEB] text-white"
                : "bg-white"
            }`}
            onClick={() => setActiveTab("stayInLoop")}
          >
            Stay in loop
            {activeTab === "stayInLoop" && (
              <div className="h-4 w-4 bg-[#525CEB] rotate-45 absolute right-1/2"></div>
            )}
          </div>
          <div
            className={`px-4 py-2 rounded-[5px] border-[#525CEB] border-2 text-center hover:bg-[#525CEB] transition hover:text-white text-[#525CEB] cursor-pointer relative ${
              activeTab === "manageFinances"
                ? "bg-[#525CEB] text-white"
                : "bg-white"
            }`}
            onClick={() => setActiveTab("manageFinances")}
          >
            Manage finances
            {activeTab === "manageFinances" && (
              <div className="h-4 w-4 bg-[#525CEB] rotate-45 absolute right-1/2"></div>
            )}
          </div>
        </div>
        {/* Features Tabs */}
        {activeTab === "trackProducts" && <TrackProducts />}
        {activeTab === "stayInLoop" && <StayInLoop />}
        {activeTab === "manageFinances" && <TrackFinances />}
      </div>
    </section>
  );
}

export function TrackProducts() {
  return (
    <div className="mt-10">
      <div className="flex flex-col gap-6 md:flex-row md:flex-row md:justify-center">
        <Image
          src={"/images/stocksavvy-swipe-1.png"}
          width={500}
          height={500}
          alt="Image"
          className="w-[600px] md:w-[400px] rounded-[20px]"
        />
        <div className="bg-white p-5 lg:p-8 rounded-[20px] shadow flex flex-col gap-6">
          <div>
            <h4 className="text-xl lg:text-2xl">Track Products</h4>
            <p className="text-sm mt-2 text-gray-700">
              Stocksavvy tracks products expiry dates for effective inventory
              management
            </p>
          </div>
          <div className="text-[14px] lg:text-[16px] flex flex-col gap-2 text-black">
            <div className="flex items-center gap-2">
              <HiMiniArrowRightCircle className="text-[#525CEB] text-xl" />
              <span>Track product purchases</span>
            </div>
            <div className="flex items-center gap-2">
              <HiMiniArrowRightCircle className="text-[#525CEB] text-xl" />
              <span>Track product expiry dates</span>
            </div>
            <div className="flex items-center gap-2">
              <HiMiniArrowRightCircle className="text-[#525CEB] text-xl" />
              <span>Track products using barcodes</span>
            </div>
            <div className="flex items-center gap-2">
              <HiMiniArrowRightCircle className="text-[#525CEB] text-xl" />
              <span>Make adjustments to products prices on the go</span>
            </div>
            <div className="flex items-center gap-2">
              <HiMiniArrowRightCircle className="text-[#525CEB] text-xl" />
              <span>Manage variants of products</span>
            </div>
          </div>
          <div>
            <Link
              className="border px-[24px] py-[12px] rounded-[5px] border-[#525CEB] bg-[#525CEB] text-white hover:bg-transparent hover:text-[#525CEB] whitespace-nowrap text-sm md:text-[16px]"
              href="/"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export function StayInLoop() {
  return (
    <div className="mt-10">
      <div className="flex flex-col gap-6 md:flex-row md:flex-row md:justify-center">
        <Image
          src={"/images/reports.jpeg"}
          width={500}
          height={500}
          alt="Image"
          className="w-[600px] md:w-[400px] rounded-[20px]"
        />
        <div className="bg-white p-5 lg:p-8 rounded-[20px] shadow flex flex-col gap-6">
          <div>
            <h4 className="text-xl lg:text-2xl">Stay in the loop</h4>
            <p className="text-sm mt-2 text-gray-700">
              Cut through the noise as stay in the loop with accurate reports
            </p>
          </div>
          <div className="text-[14px] lg:text-[16px] flex flex-col gap-2 text-black">
            <div className="flex items-center gap-2">
              <HiMiniArrowRightCircle className="text-[#525CEB] text-xl" />
              <span>Run advanced profit/loss reports</span>
            </div>
            <div className="flex items-center gap-2">
              <HiMiniArrowRightCircle className="text-[#525CEB] text-xl" />
              <span>Up to date inventory valuation reports</span>
            </div>
            <div className="flex items-center gap-2">
              <HiMiniArrowRightCircle className="text-[#525CEB] text-xl" />
              <span>Manage cash registers</span>
            </div>
            <div className="flex items-center gap-2">
              <HiMiniArrowRightCircle className="text-[#525CEB] text-xl" />
              <span>Keep track of payments and payment accounts</span>
            </div>
            <div className="flex items-center gap-2">
              <HiMiniArrowRightCircle className="text-[#525CEB] text-xl" />
              <span></span>
            </div>
          </div>
          <div>
            <Link
              className="border px-[24px] py-[12px] rounded-[5px] border-[#525CEB] bg-[#525CEB] text-white hover:bg-transparent hover:text-[#525CEB] whitespace-nowrap text-sm md:text-[16px]"
              href="/"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export function TrackFinances() {
  return (
    <div className="mt-10">
      <div className="flex flex-col gap-6 md:flex-row md:flex-row md:justify-center">
        <Image
          src={"/images/stocksavvy-swipe-1.png"}
          width={500}
          height={500}
          alt="Image"
          className="w-[600px] md:w-[400px] rounded-[20px]"
        />
        <div className="bg-white p-5 lg:p-8 rounded-[20px] shadow flex flex-col gap-6">
          <div>
            <h4 className="text-xl lg:text-2xl">
              Track products expiry <span>dates</span>
            </h4>
            <p className="text-sm mt-2 text-gray-700">
              Stocksavvy tracks products expiry dates for effective inventory
              management using;
            </p>
          </div>
          <div className="text-[14px] lg:text-[16px] flex flex-col gap-2 text-black">
            <div className="flex items-center gap-2">
              <HiMiniArrowRightCircle className="text-[#525CEB] text-xl" />
              <span>Organized Systematic Database</span>
            </div>
            <div className="flex items-center gap-2">
              <HiMiniArrowRightCircle className="text-[#525CEB] text-xl" />
              <span>Organized Systematic Database</span>
            </div>
            <div className="flex items-center gap-2">
              <HiMiniArrowRightCircle className="text-[#525CEB] text-xl" />
              <span>Organized Systematic Database</span>
            </div>
            <div className="flex items-center gap-2">
              <HiMiniArrowRightCircle className="text-[#525CEB] text-xl" />
              <span>Organized Systematic Database</span>
            </div>
            <div className="flex items-center gap-2">
              <HiMiniArrowRightCircle className="text-[#525CEB] text-xl" />
              <span>Organized Systematic Database</span>
            </div>
          </div>
          <div>
            <Link
              className="border px-[24px] py-[12px] rounded-[5px] border-[#525CEB] bg-[#525CEB] text-white hover:bg-transparent hover:text-[#525CEB] whitespace-nowrap text-sm md:text-[16px]"
              href="/"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
