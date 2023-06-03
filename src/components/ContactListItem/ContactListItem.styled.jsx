import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.item.border};
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const DeleteButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.button.background.default};
  color: ${({ theme }) => theme.colors.button.text};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.background.hover};
  }
`;
