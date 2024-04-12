"use client";
//import hooks
import { useState } from "react";
//import components
import { BasicPlan } from "./basicplan";
import { StandardPlan } from "./standardplan";
import { ProPlan } from "./proplan";
import { EnterprisePlan } from "./enterpriseplan";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PriceChanger() {
  const [isAnnually, setIsAnnually] = useState<boolean>(false);
  const [businessLocations, setBusinessLocations] = useState<string>("1");
  return (
    <div>
      <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-12 my-10 gap-6">
        <div className="flex gap-3">
          <span className="font-bold ">Monthly</span>
          <Switch checked={isAnnually} onCheckedChange={setIsAnnually} />
          <span className="font-bold ">Annually</span>
        </div>
        <div className="flex gap-3 items-center">
          <span className="cursor-pointer">Business size: </span>
          <Select
            onValueChange={(value) => {
              setBusinessLocations(value);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="1 location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value={"1"}>1 location</SelectItem>
                <SelectItem value="3">3 locations</SelectItem>
                <SelectItem value="5">5 locations</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-3 mt-5 max-w-[1000px] mx-auto">
        <BasicPlan
          isAnnually={isAnnually}
          businessLocations={businessLocations}
        />
        <StandardPlan
          isAnnually={isAnnually}
          businessLocations={businessLocations}
        />
        <ProPlan
          isAnnually={isAnnually}
          businessLocations={businessLocations}
        />
        {/* <EnterprisePlan /> */}
      </div>
    </div>
  );
}
