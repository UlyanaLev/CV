import './Summary.css';
import { useTranslation } from 'react-i18next';

function Summary() {
    const { t } = useTranslation();
    const summary = t('summary');
    const summary_text = t('summary_text');

    return (
        <div className='summary'>
            <div className='summary-wrapper'>
                <h2 className='summary-title'>{summary}</h2>
                <p className='summary-text'>{summary_text}</p>
            </div>
        </div>
    );
}

export default Summary;