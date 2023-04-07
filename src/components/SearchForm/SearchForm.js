import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { searchCarts } from '../../redux/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const SearchForm = () => {
    
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(searchCarts(title));
        //wywolanie funkcji otrzymanej od parametru action w List, przekazuje jej inf co było w input value
        setTitle('');
    }
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput value={title} placeholder="Search..." onChange={e => setTitle(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;