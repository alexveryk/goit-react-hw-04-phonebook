import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FilterContainer } from './Filter.styled';
import { FilterLabel } from './Filter.styled';
import { FilterInput } from './Filter.styled';

export const Filter = ({ onChange, filterValue }) => {
  const idForm = nanoid(5);
  return (
    <FilterContainer>
      <FilterLabel htmlFor={idForm}>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id={idForm}
        value={filterValue}
        onChange={onChange}
      />
    </FilterContainer>
  );
};

Filter.prototype = {
  onChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
