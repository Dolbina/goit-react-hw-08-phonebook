import styled from 'styled-components';

export const Form = styled.form`
width: 320px;
`;

export const Label=styled.label`
 display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const ButtonWrap = styled.button`
  border: 0px solid gray;
  border-radius: 1px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: aqua;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;