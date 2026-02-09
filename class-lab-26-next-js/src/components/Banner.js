import Image from "next/image";
const Banner = () => {
  return (
    <>
      <div className="w-full h-100 overflow-hidden">
        <Image
          src="/images/Banner.jpg"
          alt="Blog Banner"
          width={3000}
          height={1000}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </>
  );
};
export default Banner;
