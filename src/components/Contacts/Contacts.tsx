import React, { useState } from 'react';
import './Contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

function Contacts() {
    const [notification, setNotification] = useState('');
    const { t } = useTranslation();

    const contact = t('contact');
    const location = t('location');

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
                <h2 className='contacts-title'>{contact}</h2>
                <div className='contacts-wrap'>
                    <FontAwesomeIcon icon={faLocationDot} className='contacts-icons'/>
                    <p className='contacts-description'>{location}</p>
                </div>
                <div className='contacts-wrap' >
                    <a href="mailto:ulyana.liauchuk@gmail.com?subject=Тема%20письма&body=Текст%20письма" target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faEnvelope} className='contacts-icons'/>
                    </a>
                    <p className='contacts-description'>ulyana.liauchuk@gmail.com</p>
                    <FontAwesomeIcon icon={faCopy} className='contacts-icons-copy' onClick={() => handleCopy('ulyana.liauchuk@gmail.com')}/>
                </div>
                <div className='contacts-wrap'>
                    <a href='https://t.me/ulevchuk' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faTelegram} className='contacts-icons'/>
                    </a>
                    <p className='contacts-description' > @ulevchuk</p>
                    <FontAwesomeIcon icon={faCopy} className='contacts-icons-copy' onClick={() => handleCopy('@ulevchuk')}/>
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