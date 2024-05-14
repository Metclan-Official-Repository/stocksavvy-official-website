//import components
import PriceChanger from "./components/pricechanger";

//import components
import { Footer } from "../components/footer";

export default function Pricing() {
  return (
    <section className="">
      <div className="bg-[#F5F7FC] py-20" id="pricing">
        <div className="w-[85%] mx-auto max-w-[1201px]">
          {/* Heading */}
          <div className="">
            <h2 className="text-center text-3xl lg:text-4xl font-bold">
              <span className="text-[#525CEB]">Pricing</span>
            </h2>
            <p className="text-[14px] lg:text-16px text-center my-6 text-gray-700">
              Select the best plan that fits your business and foster your
              businesses growth
            </p>
          </div>
          <div className="">
            <PriceChanger />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
