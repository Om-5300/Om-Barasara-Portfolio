import Image from "next/image";

const Bulb = () => {
  return (
    <div className="bulb_wrapper">
      <Image
        src="/bulb.png"
        alt="bulb"
        width={260}
        height={200}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Bulb;
