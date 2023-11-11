import "@styles/style.scss";
import { createRoot } from "react-dom/client";
import Counter from "@components/Counter";

const App = () => {
  return <Counter initValue={2} />;
};

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  throw new Error("Mount container not found");
}
