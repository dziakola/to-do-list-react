import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addList } from '../../redux/store';

const ListForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList( {id: shortid(), title, description}));
        //wywolanie funkcji otrzymanej od parametru action w List, przekazuje jej inf co było w input value
        setTitle('');
        setDescription('');
    }

	return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            Title: <TextInput value={title} onChange={e => setTitle(e.target.value)}/>
            Description: <TextInput value={description} onChange={e => setDescription(e.target.value)}/>
            <Button>Add list</Button>
        </form>
        
	);
};

export default ListForm;