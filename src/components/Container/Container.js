import styles from './Container.module.scss';
const Container = props => {
    const classes = [props.classname, styles.container];
    return(
        <div className={[...classes].join(' ')} >
            {props.children}
        </div>
    )
};

export default Container;