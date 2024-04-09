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
  // console.log(date);

  const currentDate: Date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "long",
    day: "2-digit",
    year: "numeric",
  };
  const formattedDate: string = currentDate.toLocaleDateString(
    "en-US",
    options
  );
  const dateWithoutComma: string = formattedDate.replace(/,/g, ""); // Remove the comma
  console.log(dateWithoutComma);

  const handlerDecrease = () => {
    setDay((d) => d + 1);
  };

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
        {/* {day} Today is {currentDayOfWeek} {monthName} {dayOfMonth + day} {year} */}
        {/* {day} Today is {currentDayOfWeek} {monthName} {dayOfMonth + day} {year} */}
        {day} Today is {dateWithoutComma}
      </h1>
    </>
  );
};
