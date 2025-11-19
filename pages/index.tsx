import { Inter, Tomorrow } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";
import AnimateDigit from "../components/AnimateDigit";
import {
  getFullDateTimeStringWithLocale,
  getShortenedDateString,
} from "../components/DateTimeHelper";

const body = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const display = Tomorrow({
  weight: "400",
  subsets: ["latin"],
});

const Landing = () => {
  const eventName = process.env.NEXT_PUBLIC_EVENT_NAME;
  const eventDescription = process.env.NEXT_PUBLIC_EVENT_DESCRIPTION;
  const enrolledTime = new Date(
    process.env.NEXT_PUBLIC_ENROLLED_TIME
  ).getTime();
  const graduationTime = new Date(
    process.env.NEXT_PUBLIC_GRADUATION_TIME
  ).getTime();
  const [timeLeft, setTimeLeft] = useState({
    info: {
      difference: 0,
    },
    calculation: {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
    },
  });

  useEffect(() => {
    setInterval(() => {
      const now = new Date().getTime();
      const difference = graduationTime - now;

      const milliSecToSec = 1000 * 60;

      const pastCorrection = difference > 0 ? 0 : 1;

      setTimeLeft({
        info: {
          difference: difference,
        },
        calculation: {
          day:
            Math.floor(difference / (milliSecToSec * 60 * 24)) + pastCorrection,
          hour:
            Math.floor(
              (difference % (milliSecToSec * 60 * 24)) / (milliSecToSec * 60)
            ) + pastCorrection,
          minute:
            Math.floor((difference % (milliSecToSec * 60)) / milliSecToSec) +
            pastCorrection,
          second:
            Math.floor((difference % milliSecToSec) / 1000) + pastCorrection,
        },
      });
    }, 1000);
  }, []);

  console.log(timeLeft);

  return (
    <>
      <Head>
        <title>{eventName}</title>
        <meta name="description" content={eventDescription} />
      </Head>
      <div
        className={`${body.className} flex flex-col min-h-screen items-center 
          justify-center font-sans text-zinc-900 dark:text-zinc-100
          bg-zinc-200 dark:bg-zinc-900`}
      >
        {/* Header (Title) */}
        <p className={`fixed top-8 text-center opacity-50`}>{eventName}</p>
        {/* Countdown */}
        <div
          className={`relative ${display.className} flex items-center flex-col sm:flex-row gap-0 sm:gap-6 -translate-y-0.5`}
        >
          {/* Day Counter */}
          <div className="flex text-6xl leading-none">
            <span className="translate-y-0.5">T</span>
            <span
              className={
                !(timeLeft.info.difference > 0) ? "" : "-translate-y-0.5"
              }
            >
              {!(timeLeft.info.difference > 0) ? "+" : "-"}
            </span>

            {String(Math.abs(timeLeft.calculation.day))
              .split("")
              .map((i, _id) => {
                return <AnimateDigit key={_id} value={Number(i)} />;
              })}
          </div>

          {/* Time Counter */}
          <div className="flex items-center text-6xl leading-none">
            <AnimateDigit
              value={Math.floor(Math.abs(timeLeft.calculation.hour / 10))}
            />
            <AnimateDigit value={Math.abs(timeLeft.calculation.hour % 10)} />
            <span className="-translate-y-1">:</span>
            <AnimateDigit
              value={Math.floor(Math.abs(timeLeft.calculation.minute / 10))}
            />
            <AnimateDigit value={Math.abs(timeLeft.calculation.minute % 10)} />
            <span className="-translate-y-1">:</span>
            <AnimateDigit
              value={Math.floor(Math.abs(timeLeft.calculation.second / 10))}
            />
            <AnimateDigit value={Math.abs(timeLeft.calculation.second % 10)} />
          </div>
        </div>

        {/* Footer (Description) */}
        <div className={`flex flex-col fixed bottom-8 text-center`}>
          {/* <p>
            {timeLeft.info.difference < 0
              ? "Counting up since "
              : "Counting down until "}
            <b className="font-semibold">{eventName}</b>
          </p> */}
          <p>
            {timeLeft.info.difference > 0 ? (
              <>
                <b className="font-medium">
                  {/* Get a 2-decimal percentage of time from M1-M6 completion. */}
                  {(
                    Math.floor(
                      (1 -
                        (graduationTime - new Date().getTime()) /
                          (graduationTime - enrolledTime)) *
                        10000
                    ) / 100
                  ).toFixed(2)}
                  %
                </b>
                <span className="opacity-50">
                  {" "}
                  ({getShortenedDateString(enrolledTime)} –{" "}
                  {getShortenedDateString(graduationTime)})
                </span>
              </>
            ) : (
              <span>{process.env.NEXT_PUBLIC_EVENT_PASSING_MESSAGE}</span>
            )}
          </p>
          <p className="opacity-50">
            {getFullDateTimeStringWithLocale(graduationTime)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Landing;
