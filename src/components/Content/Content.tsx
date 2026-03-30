import './Content.css';
import Contacts from '../Contacts/Contacts';
import Summary from '../Summary/Summary';
import Experience from '../Experience/Experience';
import PersonalData from '../PersonalData/PersonalData';
import Languages from '../Languages/Languages';
import Education from '../Education/Education';
import Courses from '../Courses/Courses';
import Skills from '../Skills/Skills';
import Download from '../Download/Download';

function Content() {

    return (
        <div>
            <div className='content'>
                <div className='container'>
                    <div className='content-columns'>
                        <div className="left-column">
                            <Contacts></Contacts>
                            <PersonalData></PersonalData>
                            <Languages></Languages>
                            <Skills></Skills>
                            <Download></Download>
                        </div>
                        <div className="right-column">
                            <Summary></Summary>
                            <Experience></Experience>
                            <Education></Education>
                            <Courses></Courses>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Content;