import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

export function EnterprisePlan() {
  return (
    <Card>
      <CardHeader className="">
        <div className="border-b pb-3 text-center">
          <CardDescription className="border border-[#525CEB] rounded-[5px] p-2 text-[#525CEB]">
            Enterprise
          </CardDescription>
          <CardTitle className="mt-4">₦5,000</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <FaCheck className="text-[#525CEB]" />
            <span className="text-sm">1 Business location</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-[#525CEB]" />
            <span className="text-sm">3 Users</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-[#525CEB]" />
            <span className="text-sm">3000 Products</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-[#525CEB]" />
            <span className="text-sm">Unlimited invoices</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-[#525CEB]" />
            <span className="text-sm">Lifetime support</span>
          </div>
          <div className="flex items-center gap-2">
            <IoMdClose className="text-[#525CEB]" />
            <span className="text-sm">Email invoicing</span>
          </div>
          <div className="flex items-center gap-2">
            <IoMdClose className="text-[#525CEB]" />
            <span className="text-sm">Email invoicing</span>
          </div>
          <div className="flex items-center gap-2">
            <IoMdClose className="text-[#525CEB]" />
            <span className="text-sm">Email invoicing</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href=""
          className="text-center w-full bg-[#525CEB] rounded-[5px] text-white p-2"
        >
          Purchase
        </Link>
      </CardFooter>
    </Card>
  );
}
