import { useRef } from "react";
import Screen from "@/components/Screen";
import StartScreen from "./components/StartScreen";
import PageList from "./components/PageList";

export default function Home() {
  const startScreen = useRef();
  const endScreen = useRef();

  return (
    <>
      <Screen innerRef={startScreen} nextRef={endScreen}>
        <StartScreen />
      </Screen>
      <Screen innerRef={endScreen} nextRef={startScreen} isLastScreen>
        <PageList />
      </Screen>
    </>
  );
}
