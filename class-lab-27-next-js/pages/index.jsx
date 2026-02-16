import React from "react";

export default function Home(props) {
  const { greet, todos } = props;
  console.log(todos);
  if (!todos) return <p>Loading...</p>;
  return (
    <>
      <div>{greet}</div>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className="text-green-600 flex my-2 gap-2 items-center"
            >
              {todo.title}{" "}
              <span className="text-red-700 flex justify-center items-center p-1 font-bold rounded-full bg-red-200">
                Status:{" "}
              </span>
              <span className="text-blue-700 underline cursor-pointer flex justify-center items-center p-1 font-bold rounded-full bg-blue-200">
                {todo.completed ? "Completed" : "Not Complete"}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await response.json();

  return {
    props: {
      greet: "Mubeen",
      todos: data,
    },
  };
}
