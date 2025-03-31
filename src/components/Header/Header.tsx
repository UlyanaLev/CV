import './Header.css';
import myPhoto from '../../assets/images/photo.jpg';

function Header() {

    return (
        <header className='header'>
            <div className='container'>
                <div className='header-all'>
                    <div className='header-left'>
                        <img src={myPhoto} className='header-photo' alt='photo'/>
                    </div>
                    <div className='header-right'></div>
                </div>
            </div>
        </header>
    );
}

export default Header;