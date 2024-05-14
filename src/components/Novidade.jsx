import konosuba2 from '../assets/img/konosuba2.jpg'
import '../components/css/novidade.css'

const Novidade = () => {
    return (
        <div className='container-novidade'>

          
            <img className='container-img' src={konosuba2} alt="" />
          
         
            <div className='container-name-description'>
                <h1>KONOSUBA -God's blessing on this wonderful world!</h1>
                <div className='teste'>
                    <p>After a traffic accident, Kazuma Sato's disappointingly brief life was supposed to be over, 
                    but he wakes up to see a beautiful girl before him. She claims to be a goddess, 
                    Aqua, and asks if he would like to go to another world and bring only one thing with him. 
                    Kazuma decides to bring the goddess herself, 
                    and they are transported to a fantasy world filled with adventure, ruled by a demon king. 
                    Now Kazuma only wants to live in peace, but Aqua wants to solve many of 
                    this world's problems, and the demon king will only turn a blind eye for so long...</p>
                </div>
            </div>

        </div>
    )
}

export default Novidade