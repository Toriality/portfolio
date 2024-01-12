import Project from "@/components/Project";
import { createRef } from "react";

import eg1 from "@/assets/eg.jpg";
import eg2 from "@/assets/eg2.jpg";
import eg3 from "@/assets/eg3.jpg";
import nirc from "@/assets/nirc.jpg";
import nirc2 from "@/assets/nirc2.jpg";
import hex from "@/assets/hex.jpg";
import hex2 from "@/assets/hex2.jpg";
import hex3 from "@/assets/hex3.jpg";
import ctune from "@/assets/ctune.jpg";
import ctune2 from "@/assets/ctune2.jpg";
import ctune3 from "@/assets/ctune3.jpg";
import HomeButton from "@/components/HomeButton";

export default function Projects() {
  const projectRefs = {
    EmojiGuesser: createRef(),
    HexGuesser: createRef(),
    Chronotune: createRef(),
    "DYOM Bingo": createRef(),
    nIRC: createRef(),
  };

  const projects = [
    {
      title: "EmojiGuesser",
      description: `
      <p>Challenge yourself to guess a variety of random emojis by deciphering their symbols or recalling their descriptions in this simple yet very funny game.</p>
      `,
      cta: "Guess Emojis",
      link: "https://emojiguesser.vercel.app/",
      images: [eg1, eg2, eg3],
    },
    {
      title: "HexGuesser",
      description: `
      <p>Put your color recognition skills to the test and see if you can accurately pinpoint the hex codes that defines each color.</p> 
      `,
      cta: "Guess Colors",
      link: "https://hexguesser.vercel.app/",
      images: [hex, hex2, hex3],
    },
    {
      title: "Chronotune",
      description: `
     <p>Guess the release of random songs with Chronotune, a web-based music game that lets you explore millions of different songs and attempt to guess their year of release.</p> 
     <p>Due to Spotify's API, the game is not publicly available. <a href='/contact' class='link'>Contact me</a> to get whitelisted or refer to the source code documentation to create you own Chronotune version.</p>
      `,
      cta: "See source code",
      link: "https://github.com/Toriality/Chronotune",
      images: [ctune, ctune2, ctune3],
    },
    {
      title: "DYOM Bingo",
      description: `<p>An awesome bingo game for the DYOM (Design Your Own Mission) mod community.</p>`,
      cta: "Play Bingo",
      link: "https://toriality.github.io/DYOM-Bingo/",
      images: [
        "https://toriality.github.io/DYOM-Bingo/images/ss/ss_1-4_main.png",
        "https://toriality.github.io/DYOM-Bingo/images/ss/ss_1-4_modal.png",
        "https://toriality.github.io/DYOM-Bingo/images/ss/ss_1-3_dark.png",
      ],
    },
    {
      title: "nIRC",
      description: `
      <p>nIRC is a simple project experiment to create a IRC-like atmosphere. Pick a nickname and start chatting with people online!</p>
     <p>Note: It may take a few minutes to the server to load the page.</p> 
      `,
      cta: "Chat Now",
      link: "https://nirc.onrender.com/",
      images: [nirc, nirc2],
    },
    {
      title: "Toriality's website",
      description: `
      <p>You are here :)</p>
      `,
      cta: "Return home",
      link: "/",
      images: ["https://i.imgur.com/PhIhQPF.png"],
    },
  ];

  return (
    <>
      <HomeButton />
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          cta={project.cta}
          images={project.images}
          innerRef={projectRefs[project.title]}
          nextRef={projectRefs[projects[(index + 1) % projects.length]?.title]}
          isLastProject={index === projects.length - 1}
          link={project.link}
        />
      ))}
    </>
  );
}
