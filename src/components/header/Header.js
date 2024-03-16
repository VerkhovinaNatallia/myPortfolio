import './style.css';
import image from './sticker.webp';

const Header = () => {
    return (  
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Natallia</em></strong><br/>
                a frontend developer
            </h1>
            <div className="header__text">
                <p>I have completed Front-end courses at IT School Intellect Fox and have basic knowledge of HTML, CSS, JavaScript, React and Redux.</p>
            </div>
            <a href="#!" className="btn">Download CV</a>
        </div>c
        <img src={image} alt='foto' className='foto'/>
    </header>
    );
}
 
export default Header;




