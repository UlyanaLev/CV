import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-all'>
                    <a href='https://www.linkedin.com/in/ulyana-liauchuk-271287304/' className='footer-wrap' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faLinkedinIn} className='footer-icons'/>
                        <p className='footer-description'>Ulyana Liauchuk</p>
                    </a>
                    <a href='https://github.com/UlyanaLev' className='footer-wrap' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faGithub} className='footer-icons'/>
                        <p className='footer-description'>UlyanaLev</p>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;