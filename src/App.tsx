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
  const [count, setCount] = useState(0);

  // const date = new Date().toLocaleDateString();
  const currentDate = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[currentDate.getDay()]; // Get the day of the week (e.g., "Tuesday")
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[currentDate.getMonth()]; // Get the month name (e.g., "April")
  const dayOfMonth = currentDate.getDate(); // Get the day of the month (e.g., 9)
  const year = currentDate.getFullYear(); // Get the full year (e.g., 2024)
  const formattedDate = `${dayOfWeek} ${monthName} ${dayOfMonth} ${year}`;
  console.log(`Today is ${formattedDate}`);

  console.log(formattedDate);

  return (
    <>
      <div>
        <button>-</button>
        Step:1
        <button>+</button>
      </div>
      <div>
        <button>-</button>
        Count:0
        <button>+</button>
      </div>
      <h1>Today is {formattedDate}</h1>
    </>
  );
};
