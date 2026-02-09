import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { TrafficLigthWithHook } from "./02-useEffect/TrafficLigthWithHook";
import { PokemonPage, PokemonPageApp } from "./03-examples/PokemonPageApp";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { TasksApp } from "./05-useReduce/TaskApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <TrafficLigthWithEffect1 /> */}
    {/* <TrafficLigthWithHook /> */}
    {/* <PokemonPageApp /> */}
    {/* <FocusScreen /> */}
    <TasksApp />
  </StrictMode>,
);
