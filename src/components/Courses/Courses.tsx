import React, { useState } from 'react';
import './Courses.css';
import Certificate from '../../assets/images/UlyanaLevchuk.jpg';

function Courses() {
    const [isImageExpanded, setIsImageExpanded] = useState(false);

    const handleImageClick = () => {
        setIsImageExpanded(!isImageExpanded);
    };

    return (
        <div className='courses'>
            <div className='courses-wrapper'>
                <h2 className='courses-title'>Courses</h2>
                <div className='courses-all'>
                    <div className='courses-left'>
                        <div className='courses-text'>
                            <h3 className='experience-text_title'>Front-End Developer </h3>
                            <h4 className='experience-text_subtitle'>TeachMeSkills Fev 2024 - Nov 2024</h4>
                            <div className='experience-text_discription'>In 2023, I completed a frontend development course where I gained expertise in HTML, CSS, and JavaScript, as well as modern frameworks such as React.</div> 
                            <div className='experience-text_discription'>My diploma project, which you can find at GitHub - project_bookstore, 
                                showcases my skills in developing user interfaces and implementing functionality for web applications. 
                                Additionally, I have other projects available on my GitHub, including project_activebox and project_wildberries.</div>
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
        </div>
    );
}

export default Courses;