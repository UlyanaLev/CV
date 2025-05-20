import React, { useState } from 'react';
import './Courses.css';
import Certificate from '../../assets/images/UlyanaLevchuk.jpg';
import { useTranslation } from 'react-i18next';

function Courses() {
    const [isImageExpanded, setIsImageExpanded] = useState(false);

    const { t } = useTranslation();

    const courses = t('courses');
    const developer = t('developer');
    const teachmeskills = t('teachmeskills');
    const completed = t('completed');
    const diplom = t('diplom');
    
    const handleImageClick = () => {
        setIsImageExpanded(!isImageExpanded);
    };

    return (
        <div className='courses'>
            <div className='courses-wrapper'>
                <h2 className='courses-title'>{courses}</h2>
                <div className='courses-all'>
                    <div className='courses-left'>
                        <div className='courses-text'>
                            <h3 className='experience-text_title'>{developer}</h3>
                            <h4 className='experience-text_subtitle'>{teachmeskills}</h4>
                            <div className='experience-text_discription'>{completed}</div> 
                            <div className='experience-text_discription'>{diplom}</div>
                        </div>
                    </div>
                    <div className='courses-right'>
                        <img 
                            src={Certificate} 
                            className={`courses-photo ${isImageExpanded ? 'expanded' : ''}`} 
                            alt='certificate' 
                            onClick={handleImageClick} 
                        />
                    </div>
                </div>
            </div>
            {isImageExpanded && <div className='overlay' onClick={handleImageClick}></div>}
        </div>
    );
}

export default Courses;
