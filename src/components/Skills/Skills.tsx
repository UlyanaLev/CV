import './Skills.css';
import { useTranslation } from 'react-i18next';

function Skills () {
    const { t } = useTranslation();

    const skills = t('skills');

    return (
        <div className='skills'>
            <div className='skills-wrapper'>
                <h2 className='skills-title'>{skills}</h2>
                <ul className='skills-text'>
                    <li className='skills-description'> HTML, HTML5 </li>
                    <li className='skills-description'> CSS, CSS3 </li>
                    <li className='skills-description'> Sass, Less, Stylus </li>
                    <li className='skills-description'> JavaScript, TypeScript </li>
                    <li className='skills-description'> React Router DOM </li>
                    <li className='skills-description'> Redux Saga </li>
                    <li className='skills-description'> React Hook Form </li>
                    <li className='skills-description'> Bootstrap, NPM, Git </li>
                    <li className='skills-description'> REST API </li>
                    <li className='skills-description'> Figma, Photoshop</li>
                    <li className='skills-description'> Node.js, Parcel, Webpack </li>
                    <li className='skills-description'> Jest, Cypress </li>
                    <li className='skills-description'> БЭМ ООП </li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;