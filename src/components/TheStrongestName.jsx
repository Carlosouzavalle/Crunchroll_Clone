import SpyfamillyNameImg from '../assets/img/87beeb7a51c14bc2aef7571de6d32391.avif'
import styles from '../components/css/Thestrongestcss.module.css'
import { CiPlay1, CiBookmark } from "react-icons/ci";

const TheStrongestName = () => {
    return (
        <>
            <div className={styles.containerTheStrongest}>
                <div className={styles.containerImg}>
                    <img src={SpyfamillyNameImg} alt="" className={styles.strogestImg} />
                </div>
                <div className={styles.contaierDescription}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae suscipit molestiae maiores aspernatur ad explicabo nulla quo, laboriosam dolores voluptatum.</p>
                </div>
                <div>
                    <button className={styles.play3}>
                        <CiPlay1 className={styles.playButton3} />
                    </button>
                    <button className={styles.save3}>
                        <CiBookmark className={styles.saveButton3} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default TheStrongestName