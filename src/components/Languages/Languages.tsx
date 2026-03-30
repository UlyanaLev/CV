import './Languages.css';
import { useTranslation } from 'react-i18next';

function Languages() {
    const { t } = useTranslation();

    const languages = t('languages');
    const russian = t('russian');
    const belarusian = t('belarusian');
    const english = t('english');

    return (
        <div className='languages'>
            <div className='languages-wrapper'>
                <h2 className='languages-title'>{languages}</h2>
                <ul className='languages-text'>
                    <li className='languages-text_language'>{russian}</li>
                    <li className='languages-text_language'>{belarusian}</li>
                    <li className='languages-text_language'>{english}</li>
                </ul>
            </div>
        </div>
    );
}

export default Languages;