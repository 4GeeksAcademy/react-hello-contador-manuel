import React, { useState, useEffect, useRef } from "react";
import { Clock, Play, Pause, RotateCcw } from "lucide-react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  const displayDigits = () => {
    const timeStr = formatTime(seconds).padStart(6, "0");
    return timeStr.split("").map((digit, index) => (
      <div
        key={index}
        className="bg-black text-white text-4xl w-12 h-20 flex items-center justify-center m-1 rounded shadow-md font-mono"
      >
        {digit}
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6">
      <div className="flex items-center">
        <div className="bg-black text-white w-12 h-20 flex items-center justify-center m-1 rounded">
          <Clock className="h-6 w-6" />
        </div>
        {displayDigits()}
      </div>
      <div className="flex gap-4">
        <button
          className="bg-black hover:bg-zinc-800 text-white p-3 rounded-full shadow transition"
          onClick={() => setIsRunning(true)}
        >
          <Play className="w-5 h-5" />
        </button>
        <button
          className="bg-black hover:bg-zinc-800 text-white p-3 rounded-full shadow transition"
          onClick={() => setIsRunning(false)}
        >
          <Pause className="w-5 h-5" />
        </button>
        <button
          className="bg-black hover:bg-zinc-800 text-white p-3 rounded-full shadow transition"
          onClick={() => {
            setIsRunning(false);
            setSeconds(0);
          }}
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
