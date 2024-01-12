import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function HomeButton() {
  return (
    <button
      className="fixed top-[5px] left-[5px] z-10 text-white bg-zinc-800/25 rounded-full p-1 text-sm border-2 border-zinc-800/25 hover:text-lime-400 hover:border-lime-400 hover:scale-105 transition duration-300 aspect-square flex justify-center items-center sm:top-[7px] sm:left-0 sm:right-0 sm:m-auto sm:h-8 sm:aspect-square sm:text-md home-button"
      onClick={() => (window.location.href = "/")}
    >
      <FontAwesomeIcon icon={faHome} />
    </button>
  );
}
