import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  border-bottom: 1px solid #333;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CheckInput = styled.div`
  margin-right: 20px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid #EB3E19;
`;

export const CheckInputActive = styled.div`
  margin-right: 20px;
  margin-left: 0;
  height: 20px;
  width: 20px;
  background: #EB3E19;
  opacity: 0.7;
  border: 1px solid #EB3E19;
  border-radius: 50%;
`;

export const TodoTile = styled.p`
  font-size: 18px;
`;

export const TodoTileCheck = styled.p`
  font-size: 18px;
  opacity: 0.7;
`;