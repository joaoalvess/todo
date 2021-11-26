import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 30px;
`;

export const InputAddTodo = styled.input`
  width: 400px;
  border-radius: 20px;
  border: 1px solid #666;
  padding: 10px 15px 10px 15px;
  font-size: 14px;

  &:focus {
    outline: none;
    border: 1px solid #EB3E19;
  }
`;