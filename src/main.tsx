import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

import { Toaster } from "sonner";

import "./index.css";

import { TrafficLigthWithHook } from "./02-useEffect/TrafficLigthWithHook";
import { PokemonPage, PokemonPageApp } from "./03-examples/PokemonPageApp";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { TasksApp } from "./05-useReduce/TaskApp";
import { ScrambleWords } from "./05-useReduce/ScrambleWordsUseState";
import { ScrambleWords2 } from "./05-useReduce/ScrambledWor2";
import { MemoHook } from "./06-useMemo/MemoHook";
import { MemoCounter } from "./06-useMemo/MemoCounter";
import { InstagromApp } from "./07-useOptimistic/Instagrom";
import { ClientInformation } from "./08-use-suspense/ClientInformation";
import { getUserAction } from "./08-use-suspense/api/get-user.action";
import { ProfessionalApp } from "./09-useContext/ProfessionalApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <TrafficLigthWithEffect1 /> */}
    {/* <TrafficLigthWithHook /> */}
    {/* <PokemonPageApp /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords2 /> */}
    {/* <ScrambleWords /> */}

    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <Toaster /> */}
    {/* <InstagromApp /> */}

    {/* <Suspense
      fallback={
        <p className="bg-gradient flex flex-col gap-4 font-thin text-5xl">
          cargando....
        </p>
      }
    >
      <ClientInformation getUser={getUserAction({ id: 234 })} />
    </Suspense> */}

    <ProfessionalApp />
  </StrictMode>,
);
