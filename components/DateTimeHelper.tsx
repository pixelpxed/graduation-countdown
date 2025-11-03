const MonthString = [
  "January",
  "Febuary",
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
const TimeZoneString = {
  "720": "AoE",
  "660": "NUT/SST",
  "600": "HST",
  "540": "AKST",
  "480": "PST",
  "420": "MST",
  "360": "CST (US)",
  "300": "EST",
  "240": "AST",
  "180": "BRT",
  "120": "BRST",
  "60": "AZOT",
  "0": "UTC/GMT",
  "-60": "CET",
  "-120": "EET",
  "-180": "MSK/EAT",
  "-210": "IRST",
  "-240": "GST",
  "-270": "AFT",
  "-300": "PKT",
  "-330": "IST",
  "-345": "NPT",
  "-360": "BST/BTT",
  "-390": "MMT",
  "-420": "ICT",
  "-480": "CST/SGT",
  "-525": "ACWST",
  "-540": "JST/KST",
  "-570": "ACST",
  "-600": "AEST",
  "-630": "LHST/ACDT",
  "-660": "SBT/NFT",
  "-720": "NZST/FJT",
  "-765": "CHAST",
  "-780": "TOT",
  "-840": "LINT",
};

export function getShortenedDateString(date: number) {
  const time = new Date(date);
  const data = {
    month: time.getMonth() + 1,
    date: time.getDate(),
    year: time.getFullYear(),
  };

  return `${data.date > 9 ? "" : "0"}${data.date}/${data.month > 9 ? "" : "0"}${
    data.month
  }/${data.year}`;
}

export function getFullDateTimeStringWithLocale(date: number) {
  const time = new Date(date);
  const data = {
    date: {
      month: MonthString[time.getMonth()],
      date: time.getDate(),
      year: time.getFullYear(),
    },
    time: {
      hour: time.getHours(),
      minute: time.getMinutes(),
      timeZone: TimeZoneString[time.getTimezoneOffset()],
    },
  };

  return `
    ${data.date.month} ${data.date.date}, ${data.date.year} @ ${
    data.time.hour > 12 ? data.time.hour - 12 : data.time.hour
  }:${data.time.minute > 9 ? "" : "0"}${data.time.minute} ${
    data.time.hour > 12 ? "PM" : "AM"
  } ${data.time.timeZone}
  `;
}
