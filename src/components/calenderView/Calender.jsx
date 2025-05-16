import { useState } from "react";
import {
  getDatesArray,
  getDaysInMonth,
  getfirstDay,
  months,
  weekdays,
} from "../../utils/datesAndTime";

const Calender = () => {
  const date = new Date();
  const [cal, setCal] = useState({
    today: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  });

  const prevMonth = () => {
    if (cal.month > 0) {
      setCal((cal) => ({ ...cal, month: cal.month - 1 }));
    } else {
      setCal((cal) => ({ month: 11, year: cal.year - 1 }));
    }
  };

  const nextMonth = () => {
    if (cal.month < 11) {
      setCal((cal) => ({ ...cal, month: cal.month + 1 }));
    } else {
      setCal((cal) => ({ month: 0, year: cal.year + 1 }));
    }
  };

  const daysInMonths = getDaysInMonth(cal.year, cal.month);
  const fistDay = getfirstDay(cal.year, cal.month);
  const datesArray = getDatesArray(fistDay, daysInMonths);

  return (
    <div className="flex flex-col border-1 rounded-xl">
      <div className="flex gap-2 items-center border-b-1 p-2">
        <div className="flex flex-auto justify-between items-center">
          <button className="border-1 p-1" onClick={prevMonth}>
            {"<"}
          </button>
          <div className="flex gap-1">
            <span>{months[cal.month]}</span>
            <span>{cal.year}</span>
          </div>
          <button className="border-1 p-1" onClick={nextMonth}>
            {">"}
          </button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-7 gap-1 sm:gap-2 md:gap-3 p-2">
          {weekdays.map((day, i) => (
            <span
              className="flex w-10 h-10 border-1 font-semibold items-center justify-center justify-self-center rounded-md"
              key={i}
            >
              {day}
            </span>
          ))}
          {datesArray.map((elm, i) => (
            <span
              className={`${
                elm == "x" ? "invisible" : "visible"
              } flex w-10 h-10 border-1 items-center justify-center justify-self-center rounded-md ${
                elm == cal.today ? "bg-gray-400" : "bg-white"
              } hover:bg-gray-300`}
              key={i}
            >
              {elm}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calender;
