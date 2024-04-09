import { useState } from "react";

export default function App() {
  return (
    <>
      <DateCounter />
    </>
  );
}

export const DateCounter = () => {
  const [step, setStep] = useState(1);
  const [day, setDay] = useState(0);

  function addDayToCurrentDate(days: number): Date {
    const currentDate = new Date();
    return new Date(currentDate.setDate(currentDate.getDate() + days));
  }

  // Example usage:
  const nextDay = addDayToCurrentDate(day);
  console.log(`Next day: ${nextDay.toDateString()}`);

  // const date = new Date().toLocaleDateString();
  // console.log(date);

  // const currentDate: Date = new Date();
  // const options: Intl.DateTimeFormatOptions = {
  //   weekday: "short",
  //   month: "long",
  //   day: "2-digit",
  //   year: "numeric",
  // };
  // const formattedDate: string = currentDate.toLocaleDateString(
  //   "en-US",
  //   options
  // );
  // const dateWithoutComma: string = formattedDate.replace(/,/g, ""); // Remove the comma
  // console.log(dateWithoutComma);

  const handleIncrease = () => {
    setDay((d) => d + 1);
  };

  const handleDecrease = () => {
    setDay((d) => d - 1);
  };

  return (
    <>
      <div>
        <button>-</button>
        Step:1
        <button>+</button>
      </div>
      <div>
        <button onClick={handleDecrease}>-</button>
        Count:{day}
        <button onClick={handleIncrease}>+</button>
      </div>
      <h1>
        {day === 0 ? " day(s) from Today is " + nextDay.toDateString() : ""}
        {day > 0 ? day + " day(s) from Today is " + nextDay.toDateString() : ""}
        {day < 0 ? -day + " day(s) ago was " + nextDay.toDateString() : ""}
      </h1>
    </>
  );
};
