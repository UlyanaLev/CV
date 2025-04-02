import React, { useState } from 'react';
import './Contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faMobileScreen, faCopy } from '@fortawesome/free-solid-svg-icons';

function Contacts() {
    const [notification, setNotification] = useState('');

    const handleCopy = (text: any) => {
        navigator.clipboard.writeText(text).then(() => {
            setNotification('Копировано в буфер обмена!');
            setTimeout(() => {
                setNotification('');
            }, 2000);
        }).catch(err => {
            console.error('Ошибка копирования: ', err);
        });
    };

    return (
        <div className='contacts'>
            <div className='contacts-wrapper'>
                <h2 className='contacts-title'>Contact</h2>
                <div className='contacts-wrap'>
                    <FontAwesomeIcon icon={faLocationDot} className='contacts-icons'/>
                    <p className='contacts-description'>Tbilisi, Georgia</p>
                </div>
                <div className='contacts-wrap' >
                    <FontAwesomeIcon icon={faEnvelope} className='contacts-icons'/>
                    <p className='contacts-description'>ulyana.liauchuk@gmail.com</p>
                    <FontAwesomeIcon icon={faCopy} className='contacts-icons-copy' onClick={() => handleCopy('ulyana.liauchuk@gmail.com')}/>
                </div>
                <div className='contacts-wrap'>
                    <FontAwesomeIcon icon={faMobileScreen} className='contacts-icons'/>
                    <div className='contacts-phones'>
                        <div className='contacts-number'>
                            <div className='contacts-description-number' >+375298259025 BY</div>
                            <FontAwesomeIcon icon={faCopy} className='contacts-icons-copy' onClick={() => handleCopy('+375298259025')}/>
                        </div>
                        <div className='contacts-number'>
                            <div className='contacts-description-number'>+995595975205 GE</div>
                            <FontAwesomeIcon icon={faCopy} className='contacts-icons-copy' onClick={() => handleCopy('+995595975205')}/>
                        </div>
                    </div>
                </div>
            </div>
            {notification && (
                <div className={`notification ${notification ? 'show' : ''}`}>
                    {notification}
                </div>
            )}
        </div>
    );
}

export default Contacts;