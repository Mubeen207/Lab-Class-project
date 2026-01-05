import Counter from "./components/Counter";
import StudentCard from "./components/StudentCard";

let data = [
  {
    name: "Mubeen Ul Islam",
    rollNo: 123456,
    batch: 16,
    favorateLanguage: "English",
  },
  {
    name: "Zaheer",
    rollNo: 123789,
    batch: 16,
    favorateLanguage: "Sindi",
  },
  {
    name: "Hassan",
    rollNo: 654321,
    batch: 16,
    favorateLanguage: "Arabic",
  },
  {
    name: "Shayan",
    rollNo: 987654,
    batch: 16,
    favorateLanguage: "Spanish",
  },
  {
    name: "Laraib",
    rollNo: 852654,
    batch: 16,
    favorateLanguage: "Urdu",
  },
];

function App() {
  return (
    <>
      {data.map((s, i) => (
        <StudentCard key={i} {...s} />
      ))}

      <Counter />
    </>
  );
}

export default App;
