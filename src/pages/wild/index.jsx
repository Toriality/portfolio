import Project from "@/components/Project";
import Screen from "@/components/Screen";
import wildImage from "@/assets/m_1.jpg";
import HomeButton from "@/components/HomeButton";
import { createRef } from "react";
export default function Wild() {
  const projectRefs = {
    "Double-Shot": createRef(),
    PopPidgeon: createRef(),
    "Cool Space Shooter": createRef(),
    "DYOM Website": createRef(),
    "CSGO Bot": createRef(),
    ScratchBook: createRef(),
    Duotype: createRef(),
    "Toriality's website 404 page": createRef(),
  };

  const projects = [
    {
      title: "Double-Shot",
      description: `
        <p>A modification I've made for Assault Cube when I was a kid back in 2012. Probably my very first project that I had to do some sort of programming work, not much, but it's something.</p>
        `,
      cta: "Play Game",
      link: "https://sourceforge.net/projects/doubleshot10/",
      images: [
        "https://a.fsdn.com/con/app/proj/doubleshot10/screenshots/20120613_16.27.23_Territorio_De_Guerra_coop.jpg/245/183/1.5",
        "https://a.fsdn.com/con/app/proj/doubleshot10/screenshots/Double-Shot.jpg/245/183/1.5",
        "https://a.fsdn.com/con/app/proj/doubleshot10/screenshots/Luta.jpg/245/183/1.5",
        "https://a.fsdn.com/con/app/proj/doubleshot10/screenshots/Arma.jpg/245/183/1.5",
      ],
    },
    {
      title: "PopPidgeon",
      description: `
      <p>PopPidgeon is a simple platform game that you goal is to pop all the bubbles on the screen, while avoiding colliding with it.</p>
      <p>That's my second game, I didn't fully finish it so don't expect something pretty and nice ;) but I'm sure you will have some fun time</p>
      `,
      cta: "Play Game",
      link: "https://torialitydev.itch.io/poppidgeon",
      images: [
        "https://img.itch.zone/aW1hZ2UvMjM0OTQwOS8xMzkxNjcxOC5wbmc=/794x1000/CFIUfk.png",
        "https://img.itch.zone/aW1hZ2UvMjM0OTQwOS8xMzkxNjcxOS5wbmc=/794x1000/WGtgG5.png",
      ],
    },
    {
      title: "Cool Space Shooter",
      description: `
      <p>That's my first game ever. It's a simple space shooter game. Use the mouse to move the ship, click to shoot and use spacebar to restart the game after game over screen.</p>
      `,
      cta: "Play Game",
      link: "https://torialitydev.itch.io/cool-space-shooter",
      images: ["https://i.imgur.com/3hDLpgq.png"],
    },
    {
      title: "Duotype",
      description: `
      <p>A terrible first attempt to learn Socket.io. I tried to make a simple website where two people would connect and they would be able to type simultaneously. It kinda works but it's very buggy.</p>
      <p>Check a (hopefully) better project by clicking <a class='link' href='https://nirc.onrender.com'>here</a></p>
      `,
      cta: "See source code",
      link: "https://github.com/Toriality/Duotype",
      images: [],
    },
    {
      title: "DYOM Website",
      description: `
      <p>A failed attempt to remake a very old website about a mod called DYOM. The original website can be found <a class='link' href='https://dyom.gtagames.nl/'>here</a></p>
      <p>This project was abandoned.</p>
      `,
      cta: "See source code",
      link: "https://github.com/Toriality/DYOM-Website",
      images: [
        "https://i.imgur.com/BXDVOH3.png",
        "https://i.imgur.com/8OmGh3u.png",
        "https://i.imgur.com/JDkhuqt.png",
      ],
    },
    {
      title: "CSGO Bot",
      description: `
      <p>A CSGO mod that let's the user play music, listen to random radios, text-to-speech and many other fun utilities.</p>
      <p>This program is just for entertainment purposes. None of the functionalities gives the user any kind of unfair advantages (more like the opposite).</p>
      `,
      cta: "See source code",
      link: "https://github.com/Toriality/CSGO-Bot",
      images: [],
    },
    {
      title: "ScratchBook",
      description: `<p>My first serious React and web development project. This is an online free notepad for creating public and private notes.</p>
      <p>The project is not available online anymore, but the source code is available in the link below.</p>
      `,
      cta: "See source code",
      link: "https://github.com/Toriality/ScratchBook",
      images: ["https://i.imgur.com/KnPEJY7.png"],
    },
    {
      title: "Toriality's website 404 page",
      description: `
      <p>You never know what you'll find in my projects. (Tip: refreshing the page might give you different results)</p>
      `,
      cta: "Try",
      link: window.location.href + "/asdf",
      images: ["https://i.imgur.com/IMstYcs.png"],
    },
  ];

  return (
    <>
      <HomeButton />
      <Screen className="px-[0] pt-[0]" nextRef={projectRefs[projects[0]?.title]}>
        <div
          className="relative aspect-video flex justify-center max-h-64 w-full items-center"
          style={{
            backgroundImage: `url(${wildImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="backdrop-blur-sm group-hover:backdrop-blur-0 transition duration-200 wildflower"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          ></div>
          <div className="relative">
            {/* <Title>Wildflower Fields</Title> */}
            <h1 className="text-center text-4xl font-bold text-lime-500 md:text-6xl wildflower-text">
              Wildflower Fields
            </h1>
          </div>
        </div>
        <div className="mt-8 px-8 w-full space-y-8 sm:max-w-[60ch]">
          <p>
            This section of my website is made to show some of my abandoned or archived
            works, along with other small experiments and miscellaneous projects.
          </p>
          <p>
            Hope you have a good time exploring around in that uncharted and unpredictable
            wilderness.
          </p>
        </div>
      </Screen>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          cta={project.cta}
          link={project.link}
          images={project.images}
          innerRef={projectRefs[project.title]}
          nextRef={projectRefs[projects[(index + 1) % projects.length]?.title]}
          isLastProject={index === projects.length - 1}
        />
      ))}
    </>
  );
}
