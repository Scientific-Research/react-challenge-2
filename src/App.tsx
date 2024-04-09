import { useState } from "react";

export default function App() {
  return (
    <>
      <DateCounter />
    </>
  );
}

export const DateCounter = () => {
  const [count, setCount] = useState(0);

  return <h1>Hello</h1>;
};
