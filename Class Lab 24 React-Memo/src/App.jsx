import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Child from "./components/Child";

function slowFunction(num) {
  console.log("this is from slow function");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
function App() {
  const [count, setCount] = useState(0);
  console.log("Parent rerendered...");

  let result = useMemo(() => {
    return slowFunction(count);
  }, [count]);

  let handleClick = useCallback(() => {
    console.log("Clicked...");
  }, []);
  return (
    <>
      <div className="flex gap-2 m-2">
        {/* <input
          type="text"
          placeholder="Type Name"
          onChange={(e) => setName(e.target.value)}
          className="border rounded px-2 ring-offset-white"
        /> */}
        <button
          onClick={() => setCount((count) => count + 1)}
          className="border p-1 rounded text-green-700 hover:bg-green-700 hover:text-white transition-all cursor-pointer"
        >
          count is {result}
        </button>
        <Child handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
