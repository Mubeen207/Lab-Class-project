const PageBox = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-3 py-10 bg-white">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-700 text-white font-semibold shadow-md">
          97
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 font-semibold">
          98
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 font-semibold ">
          99
        </button>

        <button className="px-4 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-blue-700 hover:text-white transition">
          Next
        </button>
      </div>
    </>
  );
};
export default PageBox;
