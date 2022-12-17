
import "../style/NavBar.css";
import Facebook from '../elements/img/Facebook.svg';
import Instagram from '../elements/img/Instagram.svg';
import Github from '../elements/img/Github.svg';
import Home from '../elements/img/Home.svg';
import About from '../elements/img/About.svg';
import Portofolio from '../elements/img/Portofolio.svg';

import { Anchor, Row, Col } from 'antd';

const { Link } = Anchor;

const NavBar = () => {
    return(
        <nav class="navbar">
                <h1><span class="orange">P</span>Decky</h1>
            <div class="menu">
                <a href="#hero">
                    <img src={Home} alt="Home" ></img>
                </a>
                <a href="#about">
                    <img src={About} alt="About" ></img>
                </a>
                <a href="#portofolio">
                    <img src={Portofolio} alt="Portofolio" ></img>
                </a>
                <a href="https://web.facebook.com/decky.pratama.3152/">
                    <img src={Facebook} alt="Facebook" ></img>
                </a>
                <a href="https://www.instagram.com/pdec8__/">
                    <img src={Instagram} alt="Instagram" ></img>
                </a>
                <a href="https://github.com/pdecky1">
                <img src={Github} alt="Github" ></img>
                </a>
                
            </div>
            
        </nav>
    )
}

export default NavBar;