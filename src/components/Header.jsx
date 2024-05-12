import { CiSearch, CiBookmark, CiUser } from "react-icons/ci";
import { FaCrown } from "react-icons/fa";



import logo from '../assets/logo.svg'
import crown from '../assets/crown.svg'
import '../components/css/Header.css'

const Header = () => {
    return (
        <nav className="header-components">
            <div className="header-wrapper">
                <div className="header-logo">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="itens-container">
                    <ol className="Itens">
                        <li><a href="">Browse</a></li>
                        <li><a href="">Games</a></li>
                        <li><a href="">News</a></li>
                    </ol>
                </div>
                <div className="tryfree">
                    <div className="crown">
                        <FaCrown className="crown-icon"/>
                    </div>
                    <div className="texts-wrapper">
                        <div className="tryfree-text">
                            <p>TRY FREE</p>
                        </div>
                        <div className="premium-text">
                            <p>PREMIUM</p>
                        </div>
                    </div>
                </div>
                <div className="navigation-wrapper">
                    <CiSearch className="navigation-buttons" />
                    <CiBookmark className="navigation-buttons" />
                    <CiUser className="navigation-buttons" />
                </div>
            </div>
        </nav>
    )
}

export default Header