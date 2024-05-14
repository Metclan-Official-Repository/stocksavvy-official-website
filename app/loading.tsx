import Image from "next/image";
export default function Loading() {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-white flex items-center justify-center">
      <Image
        alt=""
        src={"/images/logo.png"}
        height={300}
        width={300}
        className=""
      />
    </div>
  );
}
