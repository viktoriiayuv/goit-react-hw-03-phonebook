import styled from 'styled-components';

export const ContactContainer = styled.li`
  padding: 4px;
  font-size: 18px;

  & button {
    margin-left: 12px;
    cursor: pointer;
    padding: 4px;
    width: 60px;
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
