import Button from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialIcon({ icon, onClick }) {
  return (
    <Button
      onClick={onClick}
      className="p-3 w-12 aspect-square flex justify-center items-center text-white text-xl border-2 border-white rounded-full hover:text-lime-500 hover:border-lime-500 hover:scale-105 hover:shadow-md hover:shadow-violet-500 social-icons"
    >
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
}
