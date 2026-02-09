import Image from "next/image";

const FeatureBlogs = () => {
  const featureBlogs = [
    {
      src: "/images/webDevlopment.png",
      heading: "Optimizing Web Performance for Modern Applications",
      para: "Learn practical strategies to improve loading speed, enhance user experience, and boost overall application performance using modern web technologies.",
      right: "Performance",
      left: "Web Development",
    },
    {
      src: "/images/reactJs.png",
      heading: "Building Scalable Frontend Architecture with React",
      para: "Discover best practices for structuring large-scale React applications to ensure maintainability, scalability, and clean code management.",
      right: "Architecture",
      left: "React JS",
    },
    {
      src: "/images/fireBase.png",
      heading: "Mastering Firebase for Real-Time Applications",
      para: "Explore how Firebase can be leveraged to build secure, scalable, and real-time web applications with minimal backend configuration.",
      right: "Database",
      left: "Firebase",
    },
    {
      src: "/images/UIUX.png",
      heading: "UI/UX Principles Every Developer Should Know",
      para: "Understand essential UI/UX design principles that help create intuitive, accessible, and visually appealing digital experiences.",
      right: "Design",
      left: "UI/UX",
    },
  ];
  return (
    <>
      <div className="py-12 px-4 md:px-12 bg-gray-50">
        <h1 className="text-3xl font-bold text-center mb-10 text-black">
          Featured Blogs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featureBlogs.map((obj, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="overflow-hidden">
                  <Image
                    src={obj.src}
                    alt={obj.heading}
                    width={500}
                    height={300}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-3 text-blue-600 transition-colors duration-300">
                    {obj.heading}
                  </h2>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {obj.para}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs  text-blue-600 px-3 py-1 rounded-full">
                      {obj.left}
                    </span>
                    <span className="text-xs  text-gray-600 px-3 py-1 rounded-full">
                      {obj.right}
                    </span>
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
export default FeatureBlogs;
