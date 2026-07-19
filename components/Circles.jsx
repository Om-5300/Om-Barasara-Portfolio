import Image from "next/image";

const Circles = () => {
  return (
    <div className="circles_wrapper">
      <Image
        src="/circles.png"
        alt="circles"
        width={260}
        height={200}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Circles;
