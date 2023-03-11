import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 12px;
  list-style: none;
  padding-left: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  padding: 4px;
`;

export const BtnDelete = styled.button`
  height: 30px;
  padding: 0 20px;
  border: none;
  border-radius: 4px;
  background-color: #30309b;
  color: #faf8f8;
  font-size: 16px;
`;
