// @deno-types="@types/react"
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src="/vite-deno.svg" alt="Vite with Deno" />

      <h1 className=" bg-destructive m-auto font-sans text-white">
        Vite + React
      </h1>

      <button
        className="max-w-30 bg-rose-500! 1 border-green-400! border-2!
      m-auto w-full"
      >
        hello
      </button>
    </>
  );
}

export default App;
