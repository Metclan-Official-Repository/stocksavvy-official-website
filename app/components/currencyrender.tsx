import { useGlobalContext } from "../context/store";
type PricingProps = {
  isAnnually: boolean;
  price: string;
};
export function CurrencyRender({ isAnnually, price }: PricingProps) {
  const { country } = useGlobalContext();

  return (
    <div className="flex justify-center gap-1 items-center">
      <span className="text-[16px]">
        {country === "nigeria" ? "₦" : country === "uganda" ? "USh" : "$"}
      </span>
      <span>{price}</span>
      <span className="text-sm text-gray-400">/{isAnnually ? "yr" : "mo"}</span>
    </div>
  );
}
