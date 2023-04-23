import styles from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import {toggleFavorite} from '../../redux/store';
import clsx from 'clsx';
import { useState } from 'react';

const Card = props => {
    const [isFavorite, setFavorite] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit = e => { 
        e.preventDefault();
        dispatch(toggleFavorite(props.id));
        setFavorite(!isFavorite);
    }
    return (
        <li className={styles.card}>
            {props.title}
            <Button onClick={handleSubmit} className={clsx(isFavorite && styles.isFavorite)}>
                <FontAwesomeIcon icon={props.icon}   />
            </Button>
        </li>
    );
};
export default Card;