//import next essentials
import Link from "next/link";
//import libs
import Markdown from "react-markdown";
//import data
import { docLinks } from "../contants/docLinks";

export const metadata = {
  title: "Learn Stocksavvy",
  description: "Learn how to use stocksavvy inventory management software",
};
export default function Learn() {
  const content = `
  ## Introductions 
  Welcome to Stocksavvy inventory management ERP tutorial page
  ## What is stocksavvy ? 
  Stocksavvy is a cloud-based inventory management ERP (Enterprise resource planning) software tailor-made for business owners to effectively manage their businesses, run advanced reports and make well informed decisions in their businesses. 
  \nStocksavvy can be used to mitigate losses and increase profits in businesses. 
  \nAs a cloud-based inventory management software, it enables you access your inventory from anywhere using any device of your choice
  
  ## Main Features 
  - Helps you manage multiple business locations efficiently 
  - Tracks both your sold and unsold products
  - Enables you run an accurate profit/loss reports on your business 
  - Transfer products between multiple business locations
  - Helps you run a stock valuation report to show you how much your stock is worth

  ## Other links 
  `;
  return (
    <section className="">
      <div className="prose text-[14px] lg:text-[16px] text-gray-600 prose-h2:font-bold prose-h1:font-bold prose-h3:font-bold marker:text-[#525CEB]">
        <Markdown>{content}</Markdown>
      </div>
      <div>
        <div className="grid grid-grid-cols-1 md:grid-cols-3 gap-6 mt-5">
          {docLinks.map((docLink) => (
            <Link
              href={docLink.link}
              className="p-4 border text-[#525CEB] rounded-[5px]"
              key={docLink.link}
            >
              {docLink.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
