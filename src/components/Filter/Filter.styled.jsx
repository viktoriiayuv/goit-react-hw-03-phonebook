import styled from 'styled-components';

export const FilterContainer = styled.div`
  margin: 0;
  font-size: 18px;

  & input {
    padding: 4px;
    width: 150px;
    outline: none;
    border: 1px solid #939699;

    &:focus {
      border-color: #6c9fec;
    }
  }
`;
