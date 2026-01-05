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
      <h3 className="p-5 mx-2">😀 {count}</h3>
      <button
        className="border p-5 mx-2 rounded-2xl hover:bg-black hover:text-white transition-all "
        onClick={() => change("-")}
      >
        Count-
      </button>
      <button
        className="border p-5 mx-2 mb-2 rounded-2xl hover:bg-black hover:text-white transition-all "
        onClick={() => change("+")}
      >
        Count+
      </button>
    </>
  );
}

export default Counter;
