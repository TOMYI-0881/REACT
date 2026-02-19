export interface ScrambleWordsState {
  currentWord: string;
  errorCounter: number;
  guess: string;
  isGameOver: boolean;
  maxAllowErrors: number;
  maxSkips: number;
  points: number;
  scrambledWord: string;
  skipCounter: number;
  words: string[];
  lengthArray: number;
  arrayRandom: String[];
}

// const GAME_WORDS = [
//   "REACT",
//   "JAVASCRIPT",
//   "TYPESCRIPT",
//   "HTML",
//   "ANGULAR",
//   "SOLID",
//   "NODE",
//   "VUEJS",
//   "SVELTE",
//   "EXPRESS",
//   "MONGODB",
//   "POSTGRES",
//   "DOCKER",
//   "KUBERNETES",
//   "WEBPACK",
//   "VITE",
//   "TAILWIND",
// ];

const GAME_WORDS = ["ROJO", "AZUL", "VERDE", "AMARILLO"];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = "") => {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

export type scrambledWordAction =
  | { type: "SET_GUES"; payload: string }
  | { type: "CHECK_ANSWER" }
  | { type: "SKIP_WORD" }
  | { type: "RESET_GAME"; payload: ScrambleWordsState };

export const functionInitial = (): ScrambleWordsState => {
  const shuffleWord = shuffleArray(GAME_WORDS);
  return {
    errorCounter: 0,
    guess: "",
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(shuffleWord[0]),
    skipCounter: 0,
    words: shuffleWord,
    currentWord: shuffleWord[0],
    lengthArray: GAME_WORDS.length,
    arrayRandom: shuffleArray(shuffleWord),
  };
};

export const scrambleWorsReducer = (
  state: ScrambleWordsState,
  action: scrambledWordAction,
): ScrambleWordsState => {
  switch (action.type) {
    case "SET_GUES":
      return {
        ...state,
        guess: action.payload.trim().toUpperCase(),
      };

    case "CHECK_ANSWER":
      if (state.guess === state.currentWord) {
        const nextPoints = state.points + 1;
        const nextWord = state.words[nextPoints];

        if (state.points + 1 <= state.words.length) {
          return {
            ...state,
            points: nextPoints,
            currentWord: nextWord,
            scrambledWord: scrambleWord(nextWord),
            guess: "",
          };
        }
      }

      return {
        ...state,
        errorCounter: state.errorCounter + 1,
        isGameOver: state.errorCounter + 1 >= state.maxAllowErrors,
        guess: "",
      };

    case "SKIP_WORD":
      const nextPoints = state.points + 1;
      const nextWord = state.words[nextPoints];
      return {
        ...state,
        points: nextPoints,
        currentWord: nextWord,
        scrambledWord: scrambleWord(nextWord),
        skipCounter: state.skipCounter + 1,
        guess: "",
      };

    case "RESET_GAME":
      return action.payload;

    default:
      return {
        ...state,
      };
  }
};
