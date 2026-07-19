import Image from "next/image";

const Avatar = () => {
  return (
    <div className="avatar_wrapper">
      <Image
        src="/avtar.png"
        alt="avatar"
        width={737}
        height={678}
        className="avatar_img"
      />
    </div>
  );
};

export default Avatar;
