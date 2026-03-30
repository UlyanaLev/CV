import './PersonalData.css';
import { useTranslation } from 'react-i18next';

function PersonalData() {
    const { t } = useTranslation();

    const personal_data = t('personal_data');
    const age = t('age');
    const years = t('years');
    const nationality = t('nationality');
    const belarus = t('belarus');
    const family_status = t('family_status');
    const single = t('single');

    return (
        <div className='personal_data'>
            <div className='personal-data_wrapper'>
                <h2 className='personal-data_title'>{personal_data}</h2>
                <div className='personal-data_text'>
                    <h3 className='personal-data-text_title'>{age}</h3>
                    <p className='personal-data-text_discription'>{years}</p>
                </div>
                <div className='personal-data_text'>
                    <h3 className='personal-data-text_title'>{nationality}</h3>
                    <p className='personal-data-text_discription'>{belarus}</p>
                </div>
                <div className='personal-data_text'>
                    <h3 className='personal-data-text_title'>{family_status}</h3>
                    <p className='personal-data-text_discription'>{single}</p>
                </div>
            </div>
        </div>
    );
}

export default PersonalData;