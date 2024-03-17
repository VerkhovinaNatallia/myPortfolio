import './style.css';
import image from './sticker.webp';

const Header = () => {
    return (  
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Привет, меня зовут <em><br/>Наталья</em></strong><br/>
                Фронтенд-разработчик
            </h1>
            <div className="header__text">
                <p>Я закончил курсы Front-end в IT-школе Intellect Fox и имею базовые знания HTML, CSS, JavaScript, React и Redux.</p>
            </div>
            
        </div>
        <img src={image} alt='foto' className='foto'/>
    </header>
    );
}
 
export default Header;




