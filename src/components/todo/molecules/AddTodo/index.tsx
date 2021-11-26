import { useState } from 'react';
import { Container, Title, InputAddTodo } from './styles';

import { useTodo } from '@/contexts/Todo';

export const AddTodo: React.FC = () => {
  const { addTodo } = useTodo()

  const [todo, setTodo] = useState('')

  return (
    <Container>
      <Title>Todo List</Title>
      <form onSubmit={(e) => {
        e.preventDefault()

        addTodo(todo)

        setTodo('')
      }} > 
        <InputAddTodo 
          value={todo} 
          placeholder="Add a new todo..." 
          onChange={(e) => {
            setTodo(e.target.value)
          }} 
        />
      </form>
    </Container>
  )
}