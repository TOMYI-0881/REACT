import * as z from "zod";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

//zod
const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateSchema = z.object({
  todos: z.array(TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});

export const getTasketInitialState = (): TaskState => {
  const saved = localStorage.getItem("task-state");

  if (!saved) {
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  }

  //validar mediante zod
  const result = TaskStateSchema.safeParse(JSON.parse(saved));

  if (result.error) {
    console.log(result.error);
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  }
  return result.data;
};

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

export const taskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };

      //!esto no es valido, esto es mutacion
      // state.todos.push(newTodo);

      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        completed: state.todos.filter((i) => i.completed).length,
        pending: state.length + 1 - state.completed,
      };

    case "TOGGLE_TODO":
      const updatesTodos = state.todos.map((i) => {
        if (i.id === action.payload) {
          return { ...i, completed: !i.completed };
        }
        return i;
      });

      return {
        ...state,
        todos: updatesTodos,
        completed: updatesTodos.filter((i) => i.completed).length,
        length: state.todos.length,
        pending: updatesTodos.filter((i) => !i.completed).length,
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((i) => i.id !== action.payload),
        length: state.todos.length - 1,
        completed: state.todos.filter((i) => i.completed).length - 1,
        pending: state.length - state.completed - 1,
      };

    default:
      return state;
  }
};
