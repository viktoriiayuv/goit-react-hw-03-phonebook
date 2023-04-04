import PropTypes from 'prop-types';

import { FilterContainer } from './Filter.styled';

const Filter = ({ filterChange }) => {
  return (
    <FilterContainer>
      <p>Find contacts by name</p>
      <input
        onChange={({ target: { value } }) => filterChange(value)}
        type="text"
        name="filter"
      ></input>
    </FilterContainer>
  );
};

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};

export default Filter;
