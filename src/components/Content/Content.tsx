import './Content.css';
import Contacts from '../Contacts/Contacts';
import Summary from '../Summary/Summary';
import Experience from '../Experience/Experience';
import PersonalData from '../PersonalData/PersonalData';
import Languages from '../Languages/Languages';

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
                        </div>
                        <div className="right-column">
                            <Summary></Summary>
                            <Experience></Experience>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Content;