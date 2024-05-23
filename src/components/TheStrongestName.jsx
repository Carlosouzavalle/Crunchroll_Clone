import SpyfamillyNameImg from '../assets/img/87beeb7a51c14bc2aef7571de6d32391.avif'
import styles from '../components/css/Thestrongestcss.module.css'


const TheStrongestName = () => {
    return (
        <>
            <div className={styles.containerTheStrongest}>
                <div className={styles.containerImg}>
                    <img src={SpyfamillyNameImg} alt="" className={styles.strogestImg}/>
                </div>
                <div className={styles.contaierDescription}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae suscipit molestiae maiores aspernatur ad explicabo nulla quo, laboriosam dolores voluptatum.</p>
                </div>
            </div>
        </>
    )
}

export default TheStrongestName