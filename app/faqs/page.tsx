//import components
import { FaqCard } from "./components/faqcard";
//import data
import { faqData } from "../contants/faqData";
import { Footer } from "../components/footer";

export const metadata = {
  title: "FAQ",
  description: "Get answers to the frequently asked questions",
};
export default function Faqs() {
  const faq = faqData.map((faq) => <FaqCard faq={faq} key={faq.id} />);
  return (
    <section className="">
      <div className="bg-[#F5F7FC] py-20">
        <div className="w-[85%] mx-auto">
          {/* Heading */}
          <h2 className="text-center text-3xl lg:text-4xl font-bold">
            Frequently Asked <span className="text-[#525CEB]">Questions</span>
          </h2>
          {/* Cards */}
          <div className="max-w-[900px] mx-auto mt-10 flex flex-col gap-6">
            {faq}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
