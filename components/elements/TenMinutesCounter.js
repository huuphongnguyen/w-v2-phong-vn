import React, { useEffect } from "react";

export default function TenMinutesCounter() {
  const countdown = () => {
    let timer = document.getElementById("timer");
    let dt = new Date();
    let m = dt.getMinutes();
    let s = dt.getSeconds();

    // minutes remaining until next 10 minute mark
    m = s ? 9 - (m % 10) : 10 - (m % 10);

    // seconds remaining until next minute mark
    if (s) {
      s = 60 - s;
    }

    timer.textContent = `${m}:${s < 10 ? "0" + s : s}`;
  };

  useEffect(() => {
    const run = setInterval(countdown, 1000);
    return () => clearInterval(run);
  }, []);

  return (
    <div className="">
      <div>
        <p className="text-black dark:text-white text-xs">
          Archillect sẽ cập nhật block mới sau{" "}
          <span
            id="timer"
            className="text-red-400 dark:text-pink-300 p-1 font-bold"
          />{" "}
          phút nữa.
        </p>
      </div>
    </div>
  );
}
