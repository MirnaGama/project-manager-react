import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';
import './Footer.modules.css';


export default function Footer() {
    return (
        <footer className="footer">
            <ul className="social_list">
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
                <li><FaTwitter/></li>
            </ul>
            <p className="copyright"><span>Project Manager</span> &copy; 2023</p>
        </footer>
    );
}