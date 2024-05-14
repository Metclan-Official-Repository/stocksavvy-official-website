import Link from "next/link";
//import icons
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
//import components
import { Footer } from "../components/footer";

export default function Contact() {
  return (
    <section className="">
      <div className="w-[85%] mx-auto py-20">
        {/* Heading */}
        <div className="">
          <h2 className="text-center text-3xl lg:text-4xl font-bold">
            Get in
            <span className="text-[#525CEB]"> Touch </span>
          </h2>
          <p className="text-[14px] lg:text-16px text-center my-6 text-gray-700">
            Want to reach out to us? We’re always available to answer your
            questions
          </p>
        </div>
        <div></div>
      </div>
      <div className="bg-[#525CEB1A] ">
        <div className="max-w-[1201px] flex flex-col py-20 gap-6 px-4 md:flex-row mx-auto">
          {/* Address */}

          <div className="border flex flex-col items-center bg-[#FF9C21] p-10 rounded-[20px] gap-3 flex-1">
            <div className="bg-white p-3 rounded-full text-xl">
              <FaLocationDot className="text-[#FF9C21]" />
            </div>
            <h4 className="text-white font-bold">Address</h4>
            <p className="text-white text-[14px] md:text-[16px">
              {" "}
              #43 Tetlow Road, Owerri, Imo State, Nigeria
            </p>
          </div>
          {/* Phone */}
          <div className="border flex flex-col items-center bg-[#F2355B] p-10 rounded-[20px] gap-3 flex-1">
            <div className="bg-white p-3 rounded-full text-xl">
              <FaPhone className="text-[#F2355B]" />
            </div>
            <h4 className="text-white font-bold">Phone Number</h4>
            <Link
              className="text-white text-[14px] md:text-[16px"
              href="tel:+2348166211248"
            >
              +2348166211248
            </Link>
          </div>
          {/* Email */}
          <div className="border flex flex-col items-center bg-[#3AD2F7] p-10 rounded-[20px] gap-3 flex-1">
            <div className="bg-white p-3 rounded-full text-xl">
              <MdEmail className="text-[#3AD2F7]" />
            </div>
            <h4 className="text-white font-bold">Email</h4>
            <Link
              className="text-white text-[14px] md:text-[16px"
              href="mailto:hi@stocksavvy.io"
            >
              hi@stocksavvy.io
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
