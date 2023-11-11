import { useState, FC } from "react";

interface CounterProps {
  initValue: number;
}

const Counter: FC<CounterProps> = ({ initValue }) => {
  const [value, setValue] = useState(initValue);

  const incrementValue = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <section>
      <p>Counter value: {value}</p>
      <button onClick={incrementValue}>Increment</button>
    </section>
  );
};

export default Counter;
