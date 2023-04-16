import styles from './NavBar.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTasks} from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
    return (
    <nav className={styles.navbar}>
        <div>
            <a href="/" className={styles.navbarlink}><FontAwesomeIcon icon={faTasks} /></a>
        </div>
         <div>
            <a href="/" className={styles.navbarlink}>Home</a>
            <a href="/favorite" className={styles.navbarlink}>Favorite</a>
            <a href="/about" className={styles.navbarlink}>About</a>
        </div>
    </nav> )
}

export default NavBar;