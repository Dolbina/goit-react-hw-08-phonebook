import { FilterWrap } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filtersContact } from 'redux/filtersSlice';
import { getFilter } from 'redux/selector';


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
    return (
      <FilterWrap>
        <label> Find contacts by name</label>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={event=> dispatch(filtersContact(event.target.value.trim()))}
          placeholder="search"
        />
      </FilterWrap>
    );
};

