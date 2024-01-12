import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useTheme } from "@/app/ThemeContext";

export default function Screen({
  children,
  innerRef,
  nextRef,
  isLastScreen = false,
  isSingleScreen = false,
  className,
}) {
  const { isDarkTheme } = useTheme();

  function scrollToNextScreen() {
    nextRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      ref={innerRef}
      className={`${
        isDarkTheme ? "text-violet-300" : "text-stone-700/50"
      } flex flex-col items-center pt-6 pb-8 px-8 snap-start h-screen z-10 ${className}`}
    >
      {children}
      {isSingleScreen ? null : isLastScreen ? (
        <button
          onClick={scrollToNextScreen}
          className={"text-violet-500 text-sm mt-auto font-bold link"}
        >
          Scroll to top
        </button>
      ) : (
        <button
          className="text-violet-500 text-lg mt-auto link"
          onClick={scrollToNextScreen}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      )}
    </div>
  );
}
