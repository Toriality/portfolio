import avatar from "@/assets/avatar.jpg";
import SmallText from "@/components/SmallText";
import Title from "@/components/Title";
import { useEffect, useState, useRef } from "react";

import { useTheme } from "@/app/ThemeContext";

export default function StartScreen() {
  const { toggleTheme } = useTheme();

  const titles = [
    "a Web Developer",
    "a Software Engineer",
    "Sophia's father",
    "a hobbyist musician",
    "a human being",
  ];

  const titlesRef = useRef();

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    if (titlesRef.current) {
      setTimeout(() => {
        titlesRef.current.classList.add("typing-effect");
        titlesRef.current.classList.remove("hidden");
      }, 10);

      setTimeout(() => {
        setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
        titlesRef.current.classList.remove("typing-effect");
        titlesRef.current.classList.add("hidden");
      }, 3000);
    }
  }, [currentTitleIndex, titles.length]);

  return (
    <>
      <div className="text-center whitespace-nowrap">
        <SmallText>Be the change you want to see in the world</SmallText>
      </div>
      <div className="text-center mb-4 mt-8">
        <img
          src={avatar}
          className="h-44 w-44 rounded-full shadow-lg shadow-lime-500/50 mb-6 border-2 border-lime-500/50 hover:shadow-violet-500 hover:border-violet-500 transition duration-300 ease-in"
          onClick={() => toggleTheme()}
        />
        <Title>Toriality</Title>
      </div>
      <div className="w-full space-y-10 max-w-[60ch]">
        <p className="text-xl relative">
          Hello! My name is Pedro <br />
          and I&apos;m{" "}
          <span
            ref={titlesRef}
            className="font-bold absolute ml-2 text-left lime-text typing-effect"
          >
            {titles[currentTitleIndex]}
          </span>
        </p>
        <p>
          A passionate developer always looking forward to improve my knowledge, deliver
          the best products I can, and help other people.{" "}
          <span className="lime-text">React, Javascript and Node</span> are my main tools.
        </p>
        <p>Check my projects and more about me below:</p>
      </div>
    </>
  );
}
