import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addColumn } from '../../redux/store';

const ColumnForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn( {id: shortid(), title, icon}));
        //wywolanie funkcji otrzymanej od parametru action w List, przekazuje jej inf co było w input value
        setTitle('');
        setIcon('');
    }

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            Title: <TextInput value={title} onChange={e => setTitle(e.target.value)}/>
            Icon: <TextInput value={icon} onChange={e => setIcon(e.target.value)}/>
            <Button>Add column</Button>
        </form>
        
	);
};

export default ColumnForm;