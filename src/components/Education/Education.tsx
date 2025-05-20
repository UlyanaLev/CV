import './Education.css';
import { useTranslation } from 'react-i18next';

function Education() {
    const { t } = useTranslation();

    const education = t('education');
    const engineer = t('engineer');
    const university = t('university');
    const faculty = t('faculty');
    const specialities = t('specialities');

    return (
        <div className='education'>
            <div className='education-wrapper'>
                <h2 className='education-title'>{education}</h2>
                <div className='education-text'>
                    <h3 className='experience-text_title'> {engineer}</h3>
                    <h4 className='experience-text_subtitle'>{university}</h4>
                    <div className='experience-text_discription'>{faculty}</div>
                    <div className='experience-text_discription'>{specialities}</div>
                </div>
            </div>
        </div>
    );
}

export default Education;