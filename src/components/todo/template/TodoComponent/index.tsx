import { AddTodo } from '@/components/todo/molecules/AddTodo';
import { ListTodo } from '@/components/todo/molecules/ListTodo';

import { ContainerTodo, ContentDiv } from './styles';

export const TodoComponent: React.FC = () => {
  return (
    <ContainerTodo>
      <ContentDiv>
        <AddTodo />
        <ListTodo />  
      </ContentDiv>
    </ContainerTodo>
  )
}