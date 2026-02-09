const GetNotification = () => {
  return (
    <>
      <div className="bg-white py-16 px-6 md:px-20">
        <div className="bg-linear-to-r from-blue-700 to-blue-900 rounded-2xl py-16 px-6 text-center text-white max-w-5xl mx-auto shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Notified When We Publish New Blogs
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-xl mx-auto bg-white p-1">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:flex-1 px-4 py-3 text-black"
            />

            <button className="px-6 py-3 rounded font-semibold bg-orange-500">
              Sent Id
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default GetNotification;
