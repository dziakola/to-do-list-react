import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import PageTitle from "../PageTitle/PageTitle";
import Container from "../Container/Container";
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsReducer.js';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import shortid from 'shortid';
const Favorite = () => {
    const cards = useSelector(getFavoriteCards);
    if(cards.length===0){
        return(<Container><PageTitle>brak ulubionych</PageTitle></Container>)
    }
    else{
    return(
        <Container>
        <PageTitle>favorite</PageTitle>
        <article key={shortid} className={styles.column}>
                {cards.map(card => 
                        <ul key={shortid}>
                            <Card key={card.id} title={card.title} icon={faStar} id={card.id}/>
                        </ul>
                )} 
        </article>  
        </Container>
    )
    }
}
export default Favorite;