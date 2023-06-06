import { FilterWrap } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filtersContact } from 'redux/contacts/filtersSlice';
import { setFilter } from 'redux/contacts/selector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(setFilter);
  return (
    <FilterWrap>
      <label> Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={event => dispatch(filtersContact(event.target.value.trim()))}
        placeholder="search"
      />
    </FilterWrap>
  );
};
