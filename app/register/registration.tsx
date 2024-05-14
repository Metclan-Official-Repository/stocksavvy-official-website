"use client";
//import libs
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/selectSubscription";
import { Button } from "@/components/ui/button";

export function Registration() {
  const router = useRouter();
  const searchParmas = useSearchParams();
  const type = searchParmas.get("type");
  const businessLocations = searchParmas.get("businessLocations");
  const plan = searchParmas.get("plan");
  if (type === "buy" && businessLocations && plan) {
    return (
      <form className="mt-10 w-full bg-white p-6 rounded-[20px] max-w-[500px] mx-auto md:p-6 lg:p-10 font-opensans">
        {/* Registration */}
        <div className="text-center">
          <h4 className="text-xl font-semibold text-[#00065F]">
            Create Business Account
          </h4>
          <p className="font-medium text-sm text-gray-600">
            Get a stocksavvy account
          </p>
        </div>
        {/* Form input fileds */}
        <div className="mt-10 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-600">Business name</label>
            <input
              className="p-4 border-none outline-none bg-gray-200 rounded-[5px]"
              placeholder="Business name"
              name="firstName"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-600">Currency</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-600">Country</label>
            <input
              className="p-4 border-none outline-none bg-gray-200 rounded-[5px]"
              placeholder="Country"
              name="country"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-600">State</label>
            <input
              className="p-4 border-none outline-none bg-gray-200 rounded-[5px]"
              placeholder="State"
              name="state"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-600">City</label>
            <input
              className="p-4 border-none outline-none bg-gray-200 rounded-[5px]"
              placeholder="City"
              name="city"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-600">
              Business Address
            </label>
            <input
              className="p-4 border-none outline-none bg-gray-200 rounded-[5px]"
              placeholder="Business address"
              name="address"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-600">Time zone</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Time Zone</SelectItem>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-5 w-full">
            <Button className="bg-[#00065F] hover:opacity-[.8] hover:bg-[#00065F] w-full">
              Continue
            </Button>
          </div>
        </div>
      </form>
    );
  }
  router.push("/pricing");
}
