//import next js essentials
import Link from "next/link";
import Image from "next/image";
//import components
import { Registration } from "./registration";
export default function Register() {
  return (
    <section className="fixed top-0 left-0 h-screen w-screen bg-[#00065F] overflow-scroll">
      <div className="w-[90%] mx-auto max-w-[1201px] my-10">
        <div className="flex justify-center">
          <Link href={"/"} className="">
            <Image
              src="/images/stocksavvy-white.png"
              width={215}
              height={53}
              alt="Logo"
              className="w-32 md:min-w-40 md:max-w-40"
            />
          </Link>
        </div>
        <Registration />
      </div>
    </section>
  );
}
