import "./assets/styles/style.scss";
import { createRoot } from "react-dom/client";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const inc = () => {
    setCounter((prev) => prev + 1);
  };

  return <h1 onClick={inc}>{counter}</h1>;
};

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  throw new Error("Mount container not found");
}
