import Image from "next/image";
const PopularBlogs = () => {
  const popularBlogs = [
    {
      src: "/images/webDevlopment.png",
      text: "How to Improve Website Performance with Modern Optimization Techniques",
      right: "5 min read",
      left: "Web Development",
    },
    {
      src: "/images/ai-landscape.png",
      text: "The Future of Artificial Intelligence in Everyday Applications",
      right: "7 min read",
      left: "Artificial Intelligence",
    },
    {
      src: "/images/Frontend-vs-Backend-edited.png",
      text: "A Complete Guide to Building Scalable Applications with Firebase",
      right: "6 min read",
      left: "Backend & Database",
    },
  ];

  return (
    <>
      <div className="py-12 px-4 md:px-12 bg-white">
        <h1 className="text-3xl font-bold text-center mb-10 text-black">
          Popular Blogs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {popularBlogs.map((obj, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="overflow-hidden">
                  <Image
                    src={obj.src}
                    alt={obj.text}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <p className="text-lg font-semibold mb-4 text-blue-600 transition-colors duration-300">
                    {obj.text}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className=" px-3 py-1 rounded-full">{obj.left}</span>
                    <span>{obj.right}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PopularBlogs;
