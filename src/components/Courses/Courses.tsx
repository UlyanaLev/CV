import './Courses.css';
import Certificate from '../../assets/images/UlyanaLevchuk.jpg';


function Courses() {

    return (
        <div className='courses'>
            <div className='courses-wrapper'>
                <h2 className='courses-title'>Courses</h2>
                <div className='courses-all'>
                    <div className='courses-left'>
                        <div className='courses-text'>
                            2023
                        </div>
                    </div>
                    <div className='courses-right'>
                        <img src={Certificate} className='courses-photo' alt='certificate'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;