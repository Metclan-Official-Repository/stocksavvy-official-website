import Image from "next/image";
export function OurClients() {
  return (
    <section className="bg-[#525CEB1A]">
      <div className="w-[85%] mx-auto py-20">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 md:text-left text-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-">
              Businesses we&apos;ve driven{" "}
              <span className="text-[#525CEB]">growth for</span>
            </h2>
            <p className="text-[14px] lg:text-[16px] text-gray-700 md:text-left text-center">
              We help digital and physical store fronts monitor/track sales with
              our innovative software unlocking exponential growth. Look no
              further! Stocksavvy is here to revolutionize the way you handle
              inventory.
            </p>
          </div>
          <Image
            src="/images/clients.png"
            width={500}
            height={500}
            alt="Clients"
            className=""
          />
        </div>
      </div>
    </section>
  );
}
