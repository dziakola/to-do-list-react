import styles from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import {toggleFavorite} from '../../redux/cardsReducer.js';
import { removeCard } from '../../redux/cardsReducer.js';
import clsx from 'clsx';
import { useState } from 'react';

const Card = props => {
    const [isFavorite, setFavorite] = useState(false);
    const dispatch = useDispatch();
    const handleSubmitFavorite = e => { 
        e.preventDefault();
        dispatch(toggleFavorite(props.id));
        setFavorite(!isFavorite);
    }
    const handleRemoveCard = e => {
        e.preventDefault();
        dispatch(removeCard(props.id))
    }
    return (
        <li className={styles.card}>
            <div>{props.title}</div>
            <div>
            <Button onClick={handleSubmitFavorite} className={clsx(isFavorite && styles.isFavorite)}>
                <FontAwesomeIcon icon={props.icon}   />
            </Button>
            <Button onClick={handleRemoveCard} className={clsx(isFavorite && styles.isFavorite)}>
                <FontAwesomeIcon icon={props.iconTrash}   />
            </Button>
            </div>
        </li>
    );
};
export default Card;