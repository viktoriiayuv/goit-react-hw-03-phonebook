import styled from 'styled-components';

export const ContactFormContainer = styled.form`
  margin: 0;
  padding: 8px;
  font-size: 18px;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 350px;

  & label {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  & input {
    padding: 4px;
    width: 150px;
    outline: none;
    border: 1px solid #939699;

    &:focus {
      border-color: #6c9fec;
    }
  }

  & button {
    cursor: pointer;
    padding: 4px;
    width: 100px;
    background-color: #fff;
    border: 1px solid #757575;
    border-radius: 5px;
    font-size: 13px;

    &:hover {
      background-color: #6c9fec;
    }
    &:active {
      background-color: #5b86c7;
    }
  }
`;
