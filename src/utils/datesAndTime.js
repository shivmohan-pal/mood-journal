export const months = [
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

export const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

export function getfirstDay(year, month) {
  return new Date(year, month, 1).getDay();
}

export function getDatesArray(firstDay, daysInMonth) {
  const datesArray = [];
  let date = 1;
  let flag = false;
  for (let i = 0; i < daysInMonth+firstDay; i++) {
    if (firstDay == i) {
      flag = true;
    }

    if (flag) {
      datesArray.push(date);
      date++;
    } else {
      datesArray.push("x");
    }

    if (daysInMonth < date) {
      flag = false;
    }
  }
  return datesArray;
}
