function StudentCard({ name, rollNo, batch, favorateLanguage }) {
  return (
    <div className="container mx-auto p-6">
      <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl">
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-white shadow-inner">
              <span className="text-xl font-bold">
                {name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800">{name}</h2>
              <p className="text-xs font-medium text-indigo-500 uppercase tracking-widest">
                Student
              </p>
            </div>
          </div>

          <div className="space-y-3 border-t border-gray-50 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Roll No:</span>
              <span className="font-mono font-bold text-gray-700">
                {rollNo}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Batch:</span>
              <span className="font-medium text-gray-700">{batch}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Language:</span>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                {favorateLanguage}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
