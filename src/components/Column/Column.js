import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchForm from '../SearchForm/SearchForm';

const Column = props => {
    const search = useSelector(state => state.search);
    const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id && card.title.toLowerCase().includes(search.toLowerCase())));
    
    return(
        <article className={styles.column}>
            <h1 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} /> {props.title} </h1>
            <ul className={styles.cards}>
               {/* filtorawnie po search */}
                {cards.map(card => <Card key={card.id} title={card.title} />)}
            </ul>
            <CardForm columnId={props.id} />
        </article>
    )
};
export default Column;