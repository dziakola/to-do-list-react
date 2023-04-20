import styles from './NavBar.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTasks} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
    <nav className={styles.navbar}>
        <div>
            <a href="/" className={styles.navbarlink}><FontAwesomeIcon icon={faTasks} /></a>
        </div>
         <div>
            <NavLink to="/" className={({isActive}) => isActive ? styles.linkActive : styles.navbarlink} >Home</NavLink>
            <NavLink to="/favorite" className={({isActive}) => isActive ? styles.linkActive : styles.navbarlink}>Favorite</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? styles.linkActive : styles.navbarlink}>About</NavLink>
        </div>
    </nav> )
}

export default NavBar;