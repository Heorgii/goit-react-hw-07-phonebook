import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterItems } from 'redux/filterSlice';
const Filter = () => {
    const dispatch = useDispatch();

    const filterChange = e => {
        dispatch(filterItems(e.currentTarget.value));
    }

    return (
        <div className={css.filter_box}>
            <label>
                <span className={css.filter_tittle}>Find contacts by name</span>
                <input type="name" onChange={filterChange} 
                    className={css.filter_input}
                />
            </label>
        </div>
    );
};

export default Filter;