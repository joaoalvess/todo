import { createContext, useContext, useState } from 'react';

import { TodoContextProps } from '@/types/contexts/TodoContext';

const TodoContext = createContext<TodoContextProps | null>(null);

export const TodoProvider: React.FC = ({ children }) => {
  const [todoList, setTodoList] = useState<any>([])

  const addTodo = (todo: string) => {
    setTodoList([
      ...todoList,
      {
        name: todo,
        check: false,
      }
    ])
  }

  const removeTodo = (index: number) => {
    const array = [...todoList]
    array.splice(index, 1);

    setTodoList(array)
  }

  const checkTodo = (index: number, value: boolean) => {
    let newValue = [...todoList]

    newValue[index].check = value

    setTodoList(newValue)
  }

  return (
    <TodoContext.Provider value={{
      addTodo,
      todoList,
      removeTodo,
      checkTodo,
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodo = (): TodoContextProps => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }

  return context;
}