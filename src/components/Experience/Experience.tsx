import './Experience.css';
import { useTranslation } from 'react-i18next';

function Experience() {
    const { t } = useTranslation();

    const experience = t('experience');
    const content_manager = t('content_manager');
    const sewing_enterprise = t('sewing_enterprise');
    const uploaded_photos = t('uploaded_photos');
    const ensured = t('ensured');
    const populated = t('populated');
    const processed = t('processed');
    const communicated = t('communicated');

    return (
        <div className='experience'>
            <div className='experience-wrapper'>
                <h2 className='experience-title'>{experience}</h2>
                <div className='experience-text'>
                    <h3 className='experience-text_title'> {content_manager} </h3>
                    <h4 className='experience-text_subtitle'> {sewing_enterprise}</h4>
                    <li className='experience-text_discription'> {uploaded_photos}</li>
                    <li className='experience-text_discription'>{ensured}</li>
                    <li className='experience-text_discription'>{populated}</li>
                    <li className='experience-text_discription'>{processed}</li>
                    <li className='experience-text_discription'>{communicated}</li>
                </div>
            </div>
        </div>
    );
}

export default Experience;