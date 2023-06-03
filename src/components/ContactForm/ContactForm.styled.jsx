import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 150px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.label};
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 1.1em;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  width: 100%;
  box-sizing: border-box;
`;

export const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.button.background.default};
  color: ${({ theme }) => theme.colors.button.text};
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.background.hover};
  }
`;
