import React, { useId } from 'react'
import { useDispatch } from 'react-redux';
import { changeTextFilter } from '../../redux/httpRedux/filterSlice';

const FilterForm = () => {
    const id = useId();
    const dispatch = useDispatch();

    const onFilter = (e) => {
        e.preventDefault();
        const input = e.target;
        const filterWord = input.value;
        dispatch(changeTextFilter(filterWord));
        
    }

    return (
        <div>
            <label htmlFor={id}>filter:</label>
            <input type="text" id={id} name="filter" onChange={ onFilter} />
        </div>
    )
}

export default FilterForm