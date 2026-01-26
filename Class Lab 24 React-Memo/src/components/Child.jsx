import { memo } from "react";

const Child = ({ handleClick }) => {
  console.log("Child rerenderd...");
  return (
    <button
      onClick={() => handleClick()}
      className="border p-1 rounded text-green-700 hover:bg-green-700 hover:text-white transition-all cursor-pointer"
    >
      Hello
    </button>
  );
};

export default memo(Child);
