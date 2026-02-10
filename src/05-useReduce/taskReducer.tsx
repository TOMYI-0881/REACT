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

export const getTasketInitialState = (): TaskState => {
  const saved = localStorage.getItem("todos");

  if (!saved) {
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  }

  return JSON.parse(saved);
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
