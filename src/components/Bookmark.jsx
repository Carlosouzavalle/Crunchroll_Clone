import { FaBookmark } from "react-icons/fa";
import './css/Bookmark.css'


const Bookmark = () => {
    return (
        <button className="BookmarkCOntainer">
            <FaBookmark className="BookmarkButton"/>
        </button>
    )
}

export default Bookmark