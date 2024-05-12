import { FaPlay  } from "react-icons/fa";
import './css/PlayButtoncss.css'

const PlayButton = () => {
    return (
        <button className="buttonPlayWrapper"> 
            <FaPlay className="buttonContainer"/>
        </button>
    )
}

export default PlayButton