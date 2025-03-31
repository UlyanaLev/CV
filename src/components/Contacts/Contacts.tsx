import './Contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

function Contacts() {

    return (
        <div className='contacts'>
            <div className='contacts-wrapper'>
                <h2 className='contacts-title'>Contact</h2>
                <div className='contacts-wrap'>
                    <FontAwesomeIcon icon={faLocationDot} className='contacts-icons'/>
                    <p className='contacts-description'>Tbilisi, Georgia</p>
                </div>
                <div className='contacts-wrap'> 
                    <FontAwesomeIcon icon={faEnvelope} className='contacts-icons'/>
                    <p className='contacts-description'>ulyana.liauchuk@gmail.com</p>
                </div>
                <div className='contacts-wrap'>
                    <FontAwesomeIcon icon={faMobileScreen} className='contacts-icons'/>
                    <p className='contacts-description'>+375298259025</p>
                </div>
            </div>
        </div>
    );
}

export default Contacts;