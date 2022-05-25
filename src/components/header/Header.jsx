import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo/logo_dark.svg'
import logo2x from '../../assets/images/logo/logo_dark@2x.svg'
import logolight from '../../assets/images/logo/logo.svg'
import logolight2x from '../../assets/images/logo/logo@2x.svg'
import menus from "../../pages/menu";
import DarkMode from "./DarkMode"
import icon from '../../assets/images/icon/connect-wallet.svg'
import user from '../../assets/images/icon/author.svg'

const Header = () => {
    const { pathname } = useLocation();
    const headerRef = useRef(null)
    useEffect(() => {
        checkmetemask();
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    const checkmetemask = async () => {
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(res => {
                    const address = res;
                    if (address !== '') {
                        document.getElementById("connect_wallet").style.display="none";
                        document.getElementById("user_profile").style.display="";
                    } else {
                        document.getElementById("user_profile").style.display="none";
                        document.getElementById("connect_wallet").style.display="";
                    }
                })
        }
    }

    const isSticky = (e) => {
        const header = document.querySelector('.js-header');
        const scrollTop = window.scrollY;
        scrollTop >= 100 ? header.classList.add('is-fixed') : header.classList.remove('is-fixed');
        scrollTop >= 120 ? header.classList.add('is-small') : header.classList.remove('is-small');
    };

    const menuLeft = useRef(null)
    const btnToggle = useRef(null)

    const menuToggle = () => {
        menuLeft.current.classList.toggle('active');
        btnToggle.current.classList.toggle('active');
    }


    const [activeIndex, setActiveIndex] = useState(null);
    const handleOnClick = index => {
        setActiveIndex(index);
    };



    return <div>

        <header id="header_main" className="header_1 js-header" ref={headerRef}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mobile-button" ref={btnToggle} onClick={menuToggle}><span></span></div>
                        <div id="site-header-inner" className="flex">
                            <div id="site-logo" className="clearfix">
                                <div id="site-logo-inner">
                                    <Link to="/" rel="home" className="main-logo">
                                        <img id="logo_header" className='logo-dark' src={logo} srcSet={logo2x} alt="nft-gaming" />
                                        <img id="logo_header" className='logo-light' src={logolight} srcSet={logolight2x} alt="nft-gaming" />
                                    </Link>
                                </div>
                            </div>
                            <form className="form-search">
                                <input type="text" placeholder="Search here" />
                                <button><i className="far fa-search"></i></button>
                            </form>

                            <nav id="main-nav" className="main-nav" ref={menuLeft}>
                                <ul id="menu-primary-menu" className="menu">
                                    {
                                        menus.map((data, index) => (
                                            <li key={index} onClick={() => handleOnClick(index)} className={`menu-item menu-item-has-children ${activeIndex === index ? 'active' : ''} `}   >
                                                <Link to="#">{data.name}</Link>
                                                <ul className="sub-menu" >
                                                    {
                                                        data.namesub.map((submenu, index) => (
                                                            <li key={index} className={
                                                                pathname === submenu.links
                                                                    ? "menu-item current-item"
                                                                    : "menu-item"
                                                            }><Link to={submenu.links}>{submenu.sub}</Link></li>
                                                        ))
                                                    }
                                                </ul>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>


                            <div className="button-connect-wallet" id="connect_wallet" style={{ display: "" }}>
                                <Link to="/connect-wallet" className="sc-button wallet  style-2">
                                    <img src={icon} alt="icon" />
                                    <span>Connect Wallet</span>
                                </Link>
                            </div>

                            <div className="mode_switcher" id="user_profile" style={{ display: 'none' }}>
                                <Link to="#">
                                <img src={user} alt="icon" />
                                </Link>
                            </div>

                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>;
};

export default Header;
