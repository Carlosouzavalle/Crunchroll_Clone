import React, { useState } from 'react';

// react icons
import { CiSearch, CiBookmark, CiUser } from "react-icons/ci";
import { FaCrown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";



import logo from '../assets/logo.svg';
import crown from '../assets/crown.svg';
import '../components/css/Header.css';
import '../components/css/dropdown.css';

const Header = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
    };


    return (
        <nav className="header-components">
            <div className="header-wrapper">
                <div className="header-logo">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="itens-container">
                    <ol className="Itens">
                        <li><a href="#" onClick={toggleDropdown2}>Browse <IoMdArrowDropdown className='dropArrow' /></a>
                            {isDropdownOpen2 && (
                                <div className='browser-drop'>
                                    <ul className="dropdown-menu1">
                                        <li className="dropdown-item">Popular</li>
                                        <li className="dropdown-item">New</li>
                                        <li className="dropdown-item">Alphabetical</li>
                                        <li className="dropdown-item">Simulcast Season</li>
                                        <li className="dropdown-item">Release Calendar</li>
                                        <li className="dropdown-item">Music Videos & Concets</li>
                                    </ul>
                                    <ul className="dropdown-menu-broser">
                                        <p className='Genres'>Genres</p>
                                        <li className="dropdown-item1">Action</li>
                                        <li className="dropdown-item1">Adventure</li>
                                        <li className="dropdown-item1">Comedy</li>
                                        <li className="dropdown-item1">Drama</li>
                                        <li className="dropdown-item1">Fantasy</li>
                                        <li className="dropdown-item1">Music</li>
                                        <li className="dropdown-item1">Romance</li>
                                        <li className="dropdown-item1">Sci-Fi</li>
                                        <li className="dropdown-item1">Seinen</li>
                                        <li className="dropdown-item1">Shojo</li>
                                        <li className="dropdown-item1">Shonen</li>
                                        <li className="dropdown-item1">Slice of Life</li>
                                        <li className="dropdown-item1">Sports</li>
                                        <li className="dropdown-item1">Supernatural</li>
                                        <li className="dropdown-item1">Thriller</li>
                                    </ul>
                                </div>
                            )}
                        </li>


                        <li><a href="">Games</a></li>
                        <li className="dropdown-container">
                            <a href="#" onClick={toggleDropdown}> News <IoMdArrowDropdown className='dropArrow' /> </a>
                            {isDropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">All news</li>
                                    <li className="dropdown-item">Anime Awards</li>
                                    <li className="dropdown-item">Events & Experiences</li>
                                </ul>
                            )}
                        </li>
                    </ol>
                </div>

                <div className="navigation-wrapper">
                    <div className="tryfree">
                        <div className="crown">
                            <FaCrown className="crown-icon" />
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
                    <CiSearch className="navigation-buttons" />
                    <CiBookmark className="navigation-buttons" />
                    <CiUser className="navigation-buttons" />
                </div>
            </div>
        </nav>
    );
};

export default Header;