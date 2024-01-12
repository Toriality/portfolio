import SocialIcon from "./SocialIcon";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faTiktok,
  faSteam,
  faDiscord,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialIcons({ setShouldNotify }) {
  const icons = [
    {
      icon: faGithub,
      onClick: () => {
        window.open("https://github.com/toriality");
      },
    },
    {
      icon: faInstagram,
      onClick: () => {
        window.open("https://www.instagram.com/toriality1/");
      },
    },
    {
      icon: faTwitter,
      onClick: () => {
        window.open("https://twitter.com/toriality1");
      },
    },
    {
      icon: faTiktok,
      onClick: () => {
        window.open("https://www.tiktok.com/@toriality");
      },
    },
    {
      icon: faWhatsapp,
      onClick: () => {
        window.open(
          "https://api.whatsapp.com/send/?phone=5521997013952&text&type=phone_number&app_absent=0"
        );
      },
    },
    {
      icon: faDiscord,
      onClick: () => {
        navigator.clipboard.writeText("toriality");
        setShouldNotify(true);
      },
    },
    {
      icon: faSteam,
      onClick: () => {
        window.open("https://steamcommunity.com/id/toriality/");
      },
    },
  ];
  return (
    <ul className="flex flex-wrap gap-4 items-center justify-center px-4">
      {icons.map((icon, index) => (
        <li key={index}>
          <SocialIcon icon={icon.icon} onClick={icon.onClick} />
        </li>
      ))}
    </ul>
  );
}
