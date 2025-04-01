import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-all'>
                    <button className='footer-wrap'>
                        <FontAwesomeIcon icon={faLinkedinIn} className='footer-icons'/>
                        <p className='footer-description'>Ulyana Liauchuk</p>
                    </button>
                    <button className='footer-wrap'>
                        <FontAwesomeIcon icon={faGithub} className='footer-icons'/>
                        <p className='footer-description'>UlyanaLev</p>
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;