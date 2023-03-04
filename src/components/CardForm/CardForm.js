import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
const CardForm = props => {
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        //wywolanie funkcji otrzymanej od parametru action w List, przekazuje jej inf co było w input value
        props.action({ title: title }, props.columnId);
        setTitle('');
    }
    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)}/>
            <Button>Add card</Button>
        </form>
        
	);
}
export default CardForm;