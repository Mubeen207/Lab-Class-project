// https://excalidraw.com/#json=zVO99hVilfob2EjQIyWfd,MYXiLIdqYKdenr5wUVFsBQ
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => dispatch(increment())}
          className="p-3 bg-gray-400 rounded-full"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="p-3 bg-blue-400 rounded-full"
        >
          -1
        </button>
      </div>
    </>
  );
};
export default Counter;
