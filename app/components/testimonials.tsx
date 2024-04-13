"use client";
//import nextjs essentials
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

//import data
import { testimonialsData } from "../contants/testimonialsData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

type TestimonialCardProp = {
  testimonial: Testimonial;
};
export function Testimonials() {
  const testimonialRenderLg = testimonialsData.map((testimonialItem) => (
    <TestimonialCard testimonial={testimonialItem} key={testimonialItem.id} />
  ));
  const testimonialRenderSm = testimonialsData.map((testimonialItem) => (
    <SwiperSlide>
      <TestimonialCard testimonial={testimonialItem} key={testimonialItem.id} />
    </SwiperSlide>
  ));
  return (
    <section className="bg-[#F5F7FC]">
      <div className="w-[85%] mx-auto">
        <div className="">
          {/* Features intro */}
          <div className="mx-auto">
            <div className="flex flex-col gap-4 lg:gap-6 pt-20">
              <h2 className="text-center text-3xl lg:text-4xl font-bold">
                What our <span className="text-[#525CEB]">customers say</span>
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
        <div className="pb-20">
          <div className="md:grid-cols-2 mt-5 hidden md:grid lg:grid-cols-3 gap-5">
            {testimonialRenderLg}
          </div>
          <div className="mt-5 md:hidden">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper relative"
            >
              {testimonialRenderSm}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: TestimonialCardProp) {
  return (
    <div className="bg-white p-5 lg:p-8 flex flex-col gap-5 rounded-[20px] shadow">
      <div className="absolute right-[5%] top-[-5%]">
        <FaQuoteLeft className="text-[#FFAD47] text-4xl" />
      </div>
      {/* Row 1 */}
      <div className="flex gap-5">
        <Image
          src={testimonial.customerPhoto}
          width={50}
          height={50}
          alt="Images"
          className="rounded-full"
        />
        <div>
          <div className="font-bold text-xl text-gray-700">
            {testimonial.customerName}
          </div>
          <p className="text-gray-700 text-[14px] lg:text-[16px]">
            {testimonial.occupation}
          </p>
        </div>
      </div>
      {/* Row 2 */}
      <div>
        <span className="text-black text-sm">{testimonial.testimonial}</span>
      </div>
      {/* Rating */}
      <div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-[#EB5757]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span>5.0</span>
        </div>
        <div className="text-sm">Rating</div>
      </div>
    </div>
  );
}
