export interface ITodoState {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface ITodos {
  todos: [ITodoState] | null
}
