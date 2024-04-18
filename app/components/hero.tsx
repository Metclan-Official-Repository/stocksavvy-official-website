//import hooks and libs
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-[85%] max-w-[1201px] mx-auto mt-20 flex justify-between gap-10 flex-col md:flex-row">
      {/* Hero first column */}
      <div className="flex-1">
        <div className="flex flex-col gap-4 lg:gap-6">
          <h1 className="text-4xl lg:text-7xl font-bold leading-relaxed">
            A <span className="text-[#525CEB]">Stress-Free</span> Way To Keep{" "}
            <span className="text-[#525CEB]">Tabs</span> On Your Inventory
          </h1>
          <p className="text-gray-700 text-[14px] lg:text-[16px]">
            Know What&apos;s In, Know What&apos;s Out, No More Guesswork with
            your stocks. Stocksavvy is here to revolutionize the way you handle
            inventory.
          </p>
        </div>
        <div className="flex gap-6 mt-6 text-[14px] lg:text-[16px]">
          <Link
            className="border px-[24px] py-[12px] rounded-[5px] border-[#525CEB] bg-transparent text-[#525CEB] hover:bg-[#525CEB] hover:text-white whitespace-nowrap"
            href="/learn"
          >
            Learn more
          </Link>
          <Link
            className="border px-[24px] py-[12px] rounded-[5px] border-[#525CEB] bg-[#525CEB] text-white hover:bg-transparent hover:text-[#525CEB] whitespace-nowrap"
            href="https://app.stocksavvy.io/login"
          >
            Get started
          </Link>
        </div>
      </div>
      {/* Hero second column */}
      <div className="flex-1 mx-auto">
        <div className="w-[300px] h-[310px] sm:w-[400px] sm:h-[400px] md:w-[400px] md:h-[350px] lg:w-[600px] lg:h-[450px] flex flex-col relative">
          {/* materials on the design */}
          <div className="h-[200px] w-[150px] lg:h-[200px] lg:w-[300px] absolute border-2 border-dashed bottom-[20%] left-[-5%] rounded-2xl border-[#525CEB] flex">
            <div className="relative flex-1">
              {/* Blue eclipse */}
              <div className="rounded-full border-[#525CEB] p-1 lg:p-2 border w-min absolute left-[6%] lg:left-[4.8%] z-10 bg-white top-[-5%] lg:top-[-9%]">
                <div className="h-2 w-2 lg:h-3 lg:w-3 bg-[#525CEB] rounded-full"></div>
              </div>
              {/* Yellow eclipse */}
              <div className="rounded-full border-[#FF9C21] p-1 lg:p-2 border w-min absolute bg-white bottom-[-5%] sm:bottom-[-5%] lg:bottom-[-8%] left-[50%] sm:left-[75%] lg:left-[79%] z-10">
                <div className="h-2 w-2 lg:h-3 lg:w-3 bg-[#FF9C21] rounded-full"></div>
              </div>
              {/* Yellow star */}
            </div>
          </div>
          <Image
            src="/images/star.png"
            width={70}
            height={70}
            alt="Award"
            className="w-[50px] sm:w-[70px] absolute z-[11] top-[43%] right-[-6%] md:right-[-6%] lg:right-[-5%] md:top-[35%] lg:top-[39%]"
          />
          <Image
            src="/images/stocksavvy-image-1.png"
            width={600}
            height={600}
            alt="Stock keeper"
            className=" w-[200px] sm:w-[250px] md:w-[200px] lg:w-[280px] absolute"
          />
          <Image
            src="/images/stocksavvy-image-2.png"
            width={600}
            height={600}
            alt="POS systems"
            className="w-[230px] sm:w-[300px] md:w-[300px] lg:w-[380px]  self-end absolute bottom-0"
          />
        </div>
      </div>
    </section>
  );
}
