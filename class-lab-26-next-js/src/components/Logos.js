import Image from "next/image";
const Logos = () => {
  return (
    <>
      <div className="py-16 bg-gray-50 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Youre in the Right Place
        </h1>

        <p className="text-gray-600 mb-10 text-lg">
          Trusted by leading brands and growing businesses worldwide.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
          <Image
            src="/images/logos.webp"
            alt="Company Logos"
            width={500}
            height={120}
            className="w-[80%] h-100"
          />
        </div>
      </div>
    </>
  );
};
export default Logos;
