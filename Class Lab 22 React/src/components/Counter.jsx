import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  let [flag, setFlag] = useState(true);
  function change(op) {
    if (op === "+") {
      setCount(++count);

      if (count === 10) {
        setFlag(true);
      }

      if (count > 10 && flag) {
        alert("Your Counter is reached 10!");
        setFlag(false);
      }
    } else {
      if (count === 0) {
        alert("Your Counter At 0");
        return;
      }
      setCount(--count);
    }
  }
  return (
    <>
      <div className="inline-flex items-center gap-4 rounded-full bg-white p-2 shadow-xl border border-gray-100">
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-500 bg-white text-xl font-bold text-red-500 transition-all hover:bg-red-500 hover:text-white active:scale-90"
          onClick={() => change("-")}
        >
         −
        </button>

        <div className="flex min-w-20 flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Value
          </span>
          <h3 className="text-2xl font-black text-gray-800 tabular-nums">
            😀{count}
          </h3>
        </div>

        <button
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-500 bg-white text-xl font-bold text-emerald-500 transition-all hover:bg-emerald-500 hover:text-white active:scale-90"
          onClick={() => change("+")}
        >
          +
        </button>
      </div>
    </>
  );
}

export default Counter;
