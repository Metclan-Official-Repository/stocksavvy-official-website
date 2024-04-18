export function Analytics() {
  return (
    <div className="mt-20 bg-[#00065F] text-white py-14">
      <div className="w-[85%] max-w-[1201px] mx-auto flex flex-col lg:flex-row justify-between gap-6 lg:gap-6">
        {/* Customers served */}
        <div>
          <h1 className="text-xl lg:text-4xl font-bold">+5k</h1>
          <p className="text-[14px] lg:text-16px">Happy customers served</p>
        </div>
        {/* Businesses using our products */}
        <div>
          <h1 className="text-xl lg:text-4xl font-bold">+2k</h1>
          <p className="text-[14px] lg:text-16px">
            Businesses using stocksavvy
          </p>
        </div>
        {/* Hours saved using our software */}
        <div>
          <h1 className="text-xl lg:text-4xl font-bold">+105k</h1>
          <p className="text-[14px] lg:text-16px">
            Hours saved through efficiency
          </p>
        </div>
      </div>
    </div>
  );
}
