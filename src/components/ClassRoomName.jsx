import ClassRoomNameImg from '../assets/img/classRoom_name.png'
import '../components/css/ClassRoomCss.css'
import PlayButton from './Playbutton'
import Bookmark from './Bookmark'


const ClassRoomName = () => {
    return (
        <div className='containerClassRoom'>
            <div className='container-img'>
                <img src={ClassRoomNameImg} alt=""/>
            </div>
            <div className='container-description'>
                <p>Kiyotaka Ayanokoji has just enrolled at Tokyo Koudo Ikusei Senior High School, where it's said t
                hat 100% of students go on to college or find employment. But he ends up in Class 1-D, 
                which is full of all the school's problem children.</p>
            </div>
            <div>
                <PlayButton />
            </div>
            <div>
                <Bookmark />
            </div>
            
        </div>
    )
}


export default ClassRoomName