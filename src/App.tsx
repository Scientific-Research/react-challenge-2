import { useState } from "react";

export default function App() {
  return (
    <>
      <DateCounter />
    </>
  );
}

let indexOfDays: number;
export const DateCounter = () => {
  const [step, setStep] = useState(1);
  const [day, setDay] = useState(0);

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

  // let index = -1;
  for (const WeekDay of daysOfWeek) {
    // index++;
    // console.log(day, index);
    const indexOfCurrentDay = daysOfWeek.indexOf(WeekDay);
    // console.log(indexOfCurrentDay);
  }

  const dayOfWeek = daysOfWeek[currentDate.getDay()]; // Get the day of the week (e.g., "Tuesday")
  let dayIndex = daysOfWeek.indexOf(dayOfWeek); // Get the index of the current day

  // console.log(`Index of ${dayOfWeek} is: ${dayIndex}`);

  // for (let i = 0; i < daysOfWeek.length; i++) {
  //   // console.log(`Index of ${daysOfWeek[i]}: ${i}`);
  //   // console.log("index", i);
  //   // indexOfDays = i;
  // }
  let currentDayOfWeek = "";
  if (dayIndex >= 0 && dayIndex <= 4) {
    currentDayOfWeek = daysOfWeek[dayIndex + day];
    console.log(dayIndex);
    console.log(day);
    console.log(currentDayOfWeek);
  } else if (dayIndex >= 5) {
    dayIndex = 0;
  }
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

  const formattedDate = `${dayOfWeek} ${monthName} ${dayOfMonth}, ${year}`;
  console.log(`Today is ${formattedDate}`);

  const handlerDecrease = () => {
    setDay((d) => d + 1);
    // console.log(day);
  };

  // console.log(daysOfWeek[indexOfDays]);
  return (
    <>
      <div>
        <button>-</button>
        Step:1
        <button>+</button>
      </div>
      <div>
        <button>-</button>
        Count:{day}
        <button onClick={handlerDecrease}>+</button>
      </div>
      <h1>
        {/* <span>{day}</span> Today is {} Jun {21 + day} 2027 */}
        {day} Today is {currentDayOfWeek} {monthName} {dayOfMonth + day} {year}
      </h1>
    </>
  );
};
