import BanishedHeroImg from '../assets/img/banishedHero_image.png'
import '../components/css/BanishedHero.css'


const BanishedHeroName = () => {
    return (
        <div className='containerBanished'>
            <div className='container-img'>
                <img className='img' src={BanishedHeroImg} alt=""/>
            </div>
            <div className='container-description'>
                <p >After being betrayed by the Hero’s party, Red hopes to start anew by opening an apothecary in a small town. He wants to keep his past life secret, but it won’t be easy...especially when a beautiful adventurer from his past asks to move in.</p>
            </div>
        </div>
    )
}


export default BanishedHeroName