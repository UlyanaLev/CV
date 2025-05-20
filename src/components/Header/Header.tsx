import React, { useState } from 'react';
import './Header.css';
import '../../../src/i18n';
import myPhoto from '../../assets/images/photo.jpg';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

function Header() {
    const [isImageExpanded, setIsImageExpanded] = useState(false);

    const handleImageClick = () => {
        setIsImageExpanded(!isImageExpanded);
    };

    return (
        <header className='header'>
            <div className='container'>
                <div className='header-all'>
                    <div className='header-left'>
                        <img 
                            src={myPhoto} 
                            className={`header-photo ${isImageExpanded ? 'expanded' : ''}`} 
                            alt='photo' 
                            onClick={handleImageClick}
                        />
                    </div>
                    <div className='header-right'>
                        <LanguageSwitcher></LanguageSwitcher>
                    </div>
                </div>
            </div>
            {isImageExpanded && <div className='overlay' onClick={handleImageClick}></div>}
        </header>
    );
}

export default Header;

