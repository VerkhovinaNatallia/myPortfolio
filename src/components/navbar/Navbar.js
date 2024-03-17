import { NavLink} from 'react-router-dom';
import './style.css'
import BtnDarkMode from '../btnDarkMod/BtnDarkMod';




const Navbar = () => {
    const activeLink = 'nav-list__link nav-list__link--active'
    const normalLink = 'nav-list__link '

    return ( 
        <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <NavLink to='/myPortfolio' className="logo">
                    <strong>Freelancer</strong> portfolio</NavLink>

                <BtnDarkMode/>

                <ul className="nav-list">
                    <li className="nav-list__item"><NavLink to='/myPortfolio' className={({isActive})=> isActive ?activeLink : ''}>Главная</NavLink></li>
                    <li className="nav-list__item"><NavLink to='/myPortfolio/skils' className={({isActive})=> isActive ? activeLink : normalLink}>Навыки</NavLink></li>
                    <li className="nav-list__item"><NavLink to='/myPortfolio/projects' className={({isActive})=> isActive ? activeLink : normalLink}>Проекты</NavLink></li>
                    <li className="nav-list__item"><NavLink to='/myPortfolio/contacts' className={({isActive})=> isActive ? activeLink : normalLink}>Контакты</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>

     );
}
 
export default Navbar;