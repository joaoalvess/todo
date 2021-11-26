export type TodoProps = {
  name: string;
  check: boolean;
}

export type TodoContextProps = {
  addTodo: (todo: string) => void,
  removeTodo: (index: number) => void,
  todoList: [TodoProps],
  checkTodo: (index: number, value: boolean) => void,
}