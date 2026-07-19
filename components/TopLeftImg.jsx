import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="top_left_img_wrapper">
      <Image
        src="/top-left-img.png"
        alt="left cover bg"
        width={400}
        height={400}
      />
    </div>
  );
};

export default TopLeftImg;
