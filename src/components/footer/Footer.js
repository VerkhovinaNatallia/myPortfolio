import './footer.css';

import vk from './../../img/icons/vk.svg'
import gitHub from './../../img/icons/gitHub.svg'
import instagram from './../../img/icons/instagram.svg'



const Footer = () => {
    return (  

        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://vk.com/nverkhovina"><img src={vk} alt="vk"/></a></li>
                    <li className="social__item"><a href="https://www.instagram.com/verkhovinanatalia?igsh=ZmY0M3MwZDQ4bWt4"><img src={instagram} alt="Link/"/></a></li>
                    <li className="social__item"><a href="https://github.com/VerkhovinaNatallia"><img src={gitHub} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2024 frontend-dev</p>
                </div>
            </div>
        </div>
    </footer>
    );
}
 
export default Footer;