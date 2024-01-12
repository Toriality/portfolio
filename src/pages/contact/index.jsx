import ClipboardNotifier from "./components/ClipboardNotifier";
import ButtonStylized from "@/components/ButtonStylized";
import HomeButton from "@/components/HomeButton";
import Screen from "@/components/Screen";
import SmallText from "@/components/SmallText";
import Title from "@/components/Title";
import SocialIcons from "./components/SocialIcons";
import { useState } from "react";

export default function Contact() {
  const [shouldNotify, setShouldNotify] = useState(false);

  function sendEmail() {
    window.location.href = "mailto:pcrelier@hotmail.com";
  }

  function copyPhone() {
    navigator.clipboard.writeText("21 99701-3952");
    setShouldNotify(true);
  }

  return (
    <div>
      <HomeButton />
      <Screen isSingleScreen>
        <div className="text-center mt-8">
          <Title>Contact Me</Title>
        </div>
        <div className="my-12 text-center flex flex-col justify-between h-full">
          <div>
            <div className="my-4">
              <SmallText>Professional Contact</SmallText>
            </div>
            <div className="flex flex-col space-y-4 px-4">
              <ButtonStylized onClick={sendEmail}>Send Email</ButtonStylized>
              <ButtonStylized onClick={copyPhone}>+55 21 99701-3952</ButtonStylized>
            </div>
          </div>
          <div>
            <div className="my-4">
              <SmallText>Social Media</SmallText>
            </div>
            <SocialIcons setShouldNotify={setShouldNotify} />
          </div>
        </div>
      </Screen>
      <ClipboardNotifier isVisible={shouldNotify} setIsVisible={setShouldNotify} />
    </div>
  );
}
