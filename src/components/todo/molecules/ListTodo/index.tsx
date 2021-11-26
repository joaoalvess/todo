import { Container, ItemContainer, CheckInput, TodoTile, NameContainer, TodoTileCheck, CheckInputActive } from "./styles"
import { useTodo } from '@/contexts/Todo';
import { BiTrash } from 'react-icons/bi';

export const ListTodo: React.FC = () => {
  const { todoList, removeTodo, checkTodo } = useTodo()

  return (
    <Container>
      {todoList.map((todo, i) => {
        return (
          <ItemContainer key={i} >
              {todo.check ? (
                <NameContainer>
                  <CheckInputActive onClick={() => {
                    checkTodo(i, false)
                  }}  />
                  <TodoTileCheck>{todo.name}</TodoTileCheck>
                </NameContainer>
              ): (
                <NameContainer>
                  <CheckInput onClick={() => {
                    checkTodo(i, true)
                  }} />
                  <TodoTile>{todo.name}</TodoTile>
                </NameContainer>
              )}

            <BiTrash 
              size="24px"
              color="#EB3E19"
              onClick={() => {
                removeTodo(i)
              }}  
            />
          </ItemContainer>
        )
      })}
    </Container>
  )
}