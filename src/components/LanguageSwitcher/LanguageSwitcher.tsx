import React from 'react';
import './LanguageSwitcher.css';
import { useTranslation } from 'react-i18next';


const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: any) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className='language_switcher'>
            <button className='language_switcher_button'
                onClick={() => changeLanguage('en')}
                style={{ opacity: i18n.language === 'en' ? 1 : 0.5 }}
            >
                EN
            </button>
            <button className='language_switcher_button'
                onClick={() => changeLanguage('ru')}
                style={{ opacity: i18n.language === 'ru' ? 1 : 0.5 }}
            >
                RU
            </button>
        </div>
    );
};

export default LanguageSwitcher;
