import { useEffect, useState } from "react";

export default function NotFound() {
  const [quote, setQuote] = useState();

  useEffect(() => {
    const quotes = [
      "Not all those who wander are lost.",
      "A man travels the world over in search of what he needs and returns home to find it.",
      "Lost time is never found again.",
    ];

    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className="flex flex-col m-auto justify-center items-center h-full w-1/2 text-white text-center">
      <h1 className="text-8xl font-bold">404</h1>
      <h2 className="text-2xl font-bold text-violet-300">Page not found!</h2>
      <p className="text-sm text-violet-300/25 mt-4">{quote}</p>

      <button
        onClick={() => (window.location.href = "/")}
        className={"text-violet-500 text-sm mt-auto font-bold mt-8"}
      >
        Return home
      </button>
    </div>
  );
}
