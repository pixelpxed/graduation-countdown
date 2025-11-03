import { Inter, Tomorrow } from "next/font/google";
import { useEffect, useState } from "react";
import AnimateDigit from "../components/AnimateDigit";
import Head from "next/head";

const body = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const display = Tomorrow({
  weight: "400",
  subsets: ["latin"],
});

const Landing = () => {
  const eventName = "Jark-yao 144";
  const enrolledTime = new Date("2020-06-29T07:30:00+07:00").getTime();
  const jarkyaoTime = new Date("2026-02-20T21:00:00+07:00").getTime();
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
      const difference = jarkyaoTime - now;

      const milliSecToSec = 1000 * 60;

      setTimeLeft({
        info: {
          difference: difference,
        },
        calculation: {
          day: Math.floor(difference / (milliSecToSec * 60 * 24)),
          hour: Math.floor(
            (difference % (milliSecToSec * 60 * 24)) / (milliSecToSec * 60)
          ),
          minute: Math.floor(
            (difference % (milliSecToSec * 60)) / milliSecToSec
          ),
          second: Math.floor((difference % milliSecToSec) / 1000),
        },
      });
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>{eventName}</title>
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
          {/* Number Fading Effect */}
          {/* <div
            className="absolute top-0 w-full h-2.5 z-10 
          bg-linear-to-t from-transparent to-zinc-200 dark:to-zinc-900"
          />
          <div
            className="absolute bottom-0 w-full h-2.5 z-10 
          bg-linear-to-b from-transparent to-zinc-200 dark:to-zinc-900"
          /> */}

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
            <AnimateDigit value={Math.floor(timeLeft.calculation.day / 100)} />
            <AnimateDigit value={Math.floor(timeLeft.calculation.day / 100)} />
            <AnimateDigit value={Math.floor(timeLeft.calculation.day % 10)} />
          </div>

          {/* Time Counter */}
          <div className="flex items-center text-6xl leading-none">
            <AnimateDigit value={Math.floor(timeLeft.calculation.hour / 10)} />
            <AnimateDigit value={timeLeft.calculation.hour % 10} />
            <span className="-translate-y-1">:</span>
            <AnimateDigit
              value={Math.floor(timeLeft.calculation.minute / 10)}
            />
            <AnimateDigit value={timeLeft.calculation.minute % 10} />
            <span className="-translate-y-1">:</span>
            <AnimateDigit
              value={Math.floor(timeLeft.calculation.second / 10)}
            />
            <AnimateDigit value={timeLeft.calculation.second % 10} />
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
            <b className="font-medium">
              {/* Get a 2-decimal percentage of time from M1-M6 completion. */}
              {Math.floor(
                (1 -
                  (jarkyaoTime - new Date().getTime()) /
                    (jarkyaoTime - enrolledTime)) *
                  10000
              ) / 100}
              %
            </b>
            <span className="opacity-50"> (29/06/2020 – 20/02/2026)</span>
          </p>
          <p className="opacity-50">Febuary 20, 2026 @ 9:00 PM ICT</p>
        </div>
      </div>
    </>
  );
};

export default Landing;
