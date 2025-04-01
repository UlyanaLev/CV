import React, { useState } from 'react';
import './Contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

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
                <div className='contacts-wrap' onClick={() => handleCopy('ulyana.liauchuk@gmail.com')}>
                    <FontAwesomeIcon icon={faEnvelope} className='contacts-icons'/>
                    <p className='contacts-description'>ulyana.liauchuk@gmail.com</p>
                </div>
                <div className='contacts-wrap'>
                    <FontAwesomeIcon icon={faMobileScreen} className='contacts-icons'/>
                    <div className='contacts-description' onClick={() => handleCopy('+375298259025')}>+375298259025 BY</div>
                    <div className='contacts-description'  onClick={() => handleCopy('+995595975205')}>+995595975205 GE</div>
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