import "../style/footer.css"
import Facebook from '../elements/img/Facebook.svg';
import Instagram from '../elements/img/Instagram.svg';
import Github from '../elements/img/Github.svg';

const Footer = () => {
    return(
        <section class="Footer">
                <p>© 2022 PDecky. All rights reserved</p>
            <div class="footer2">
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
        </section>
    )
}

export default Footer;