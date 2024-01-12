import ButtonStylized from "@/components/ButtonStylized";
import Screen from "@/components/Screen";
import Title from "@/components/Title";
import { useState } from "react";

import noimg from "@/assets/noimg.jpg";

export default function Project({
  images = [],
  title = "A Project With No Name",
  description = "No description to show yet.",
  cta = "View Project",
  innerRef = null,
  nextRef = null,
  isLastProject = false,
  link,
}) {
  const [activeImage, setActiveImage] = useState(0);

  const numberOfImages = images.length;

  function handleClick() {
    window.open(link, "_blank");
  }

  return (
    <Screen
      className="px-[0px] pt-[0px]"
      nextRef={nextRef}
      innerRef={innerRef}
      isLastScreen={isLastProject}
    >
      <div className="relative bg-black w-full aspect-video flex justify-center max-h-64 sm:bg-transparent sm:mt-11">
        <img
          src={numberOfImages > 0 ? images[activeImage] : noimg}
          alt={title}
          onClick={() => setActiveImage((activeImage + 1) % numberOfImages)}
          className="sm:rounded-md sm:shadow-lg sm:shadow-lime-500/50 sm:border-2 sm:border-lime-500/50 sm:hover:border-violet-500/50 sm:hover:shadow-violet-500/50 transition ease-in duration-300 project-image"
        />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
          {Array(numberOfImages)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className={`bg-violet-500 h-2 w-2 mb-1 rounded-full ${
                  index === activeImage ? "opacity-80" : "opacity-25"
                }`}
              ></div>
            ))}
        </div>
      </div>
      <div className="px-8 flex-grow flex flex-col w-full sm:max-w-[60ch]">
        <div className="text-center my-4">
          <Title>{title}</Title>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="space-y-4"
        ></div>
        <div className="flex-grow flex justify-center items-end mb-4">
          <ButtonStylized onClick={handleClick}>{cta}</ButtonStylized>
        </div>
      </div>
    </Screen>
  );
}
