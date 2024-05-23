import ClassRoomNameImg from '../assets/img/classRoom_name.png'
import '../components/css/ClassRoomCss.css'
import { CiPlay1, CiBookmark  } from "react-icons/ci";



const ClassRoomName = () => {
    return (
        <div className='containerClassRoom'>

            <div className='containerImg'>
                <img src={ClassRoomNameImg} alt="" />
            </div>

            <div className='container-description'>
                <p>Kiyotaka Ayanokoji has just enrolled at Tokyo Koudo Ikusei Senior High School, where it's said t
                    hat 100% of students go on to college or find employment. But he ends up in Class 1-D,
                    which is full of all the school's problem children.</p>
            </div>

            <div className='divButton'>
                <button className='play'>
                    <CiPlay1 className='playButton'/>
                </button>
                <button className='save'>
                    <CiBookmark  className='saveButton'/>
                </button>
            </div>
        </div>
    )
}


export default ClassRoomName