
import image from './../../components/header/sticker2.webp';
import './style.css';

const Contacts = () => {
    return (
        <main className="section">
        
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Minsk, Belarus</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / Viber</h2>
                        <a href="tel:+375297815977">+375(29) 781-59-77</a>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <a href="mailto:natalliaverkhovina@gmail.com">natalliaverkhovina@gmail.com</a>
                    </li>
                </ul>
                

        </div>
        <img className='contacts_photo' src={image} alt='myphoto'/>
        
    </main>

      );
}
 
export default Contacts;