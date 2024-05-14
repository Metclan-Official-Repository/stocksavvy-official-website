//import context
import { useGlobalContext } from "@/app/context/store";

//import components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CurrencyRender } from "@/app/components/currencyrender";
//import icons
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

//import utils
type SubscriptionOptions = {
  isAnnually: boolean;
  businessLocations: string;
};
export function StandardPlan({
  isAnnually,
  businessLocations,
}: SubscriptionOptions) {
  const { country } = useGlobalContext();
  let price = "";
  if (country === "nigeria") {
    if (businessLocations === "1") {
      price = isAnnually ? "150,000" : "15,000";
    }
    if (businessLocations === "3") {
      price = isAnnually ? "350,000" : "35,000";
    }
    if (businessLocations === "5") {
      price = isAnnually ? "500,000" : "50,000";
    }
  }
  if (country === "uganda") {
    if (businessLocations === "1") {
      price = isAnnually ? "400,000" : "40,000";
    }
    if (businessLocations === "3") {
      price = isAnnually ? "1M" : "100,000";
    }
    if (businessLocations === "5") {
      price = isAnnually ? "1.5M" : "150,000";
    }
  }
  if (country === "global") {
    if (businessLocations === "1") {
      price = isAnnually ? "150" : "15";
    }
    if (businessLocations === "3") {
      price = isAnnually ? "400" : "400";
    }
    if (businessLocations === "5") {
      price = isAnnually ? "600" : "60";
    }
  }
  return (
    <Card>
      <CardHeader className="">
        <div className="border-b pb-3 text-center">
          <CardDescription className="border border-[#525CEB] rounded-[5px] p-2 text-[#525CEB]">
            Standard
          </CardDescription>
          <CardTitle className="mt-4">
            <CurrencyRender isAnnually={isAnnually} price={price} />
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <FaCheck className="text-[#525CEB]" />
            <span className="text-sm">
              {businessLocations} Business locations
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-[#525CEB]" />
            <span className="text-sm">
              {businessLocations === "1"
                ? "1 User"
                : businessLocations === "3"
                ? "15 Users"
                : "25 Users"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-[#525CEB]" />
            <span className="text-sm">
              {businessLocations === "1"
                ? "4000"
                : businessLocations === "3"
                ? "6000"
                : "10000"}{" "}
              Products
            </span>
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
            <FaCheck className="text-[#525CEB]" />
            <span className="text-sm">Email invoicing</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={`/register?type=buy&businessLocations=${businessLocations}&plan=standard&annulSubscription=${isAnnually}`}
          className="text-center w-full bg-[#525CEB] rounded-[5px] text-white p-2"
        >
          Purchase
        </Link>
      </CardFooter>
    </Card>
  );
}
