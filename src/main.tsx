import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { TrafficLigthWithHook } from "./02-useEffect/TrafficLigthWithHook";
import { PokemonPage, PokemonPageApp } from "./03-examples/PokemonPageApp";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { TasksApp } from "./05-useReduce/TaskApp";
import { ScrambleWords } from "./05-useReduce/ScrambleWordsUseState";
import { ScrambleWords2 } from "./05-useReduce/ScrambledWor2";
import { MemoHook } from "./06-useMemo/MemoHook";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <TrafficLigthWithEffect1 /> */}
    {/* <TrafficLigthWithHook /> */}
    {/* <PokemonPageApp /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords2 /> */}
    {/* <ScrambleWords /> */}

    <MemoHook />
  </StrictMode>,
);
