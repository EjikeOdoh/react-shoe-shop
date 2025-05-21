import { PiEnvelope } from 'react-icons/pi'
import Logo from '../images/logo.png'
import { FaApplePay, FaCcPaypal, FaFacebookF, FaGithub, FaGooglePay, FaInstagram, FaTwitter } from 'react-icons/fa'
import { RiMastercardFill, RiVisaLine } from 'react-icons/ri'

export default function Footer() {
    return (
        <footer>
        <div className="cta">
            <h1>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h1>
            <form>
                <div className="input">
                    <PiEnvelope size={24} />
                    <input type="email" placeholder="Enter your email address" />
                </div>
                <button>Subscribe to Newsletter</button>
            </form>
        </div>
        <div className="main-footer">
            <div className="main-footer-up">
                <div className="footer-logo">
                    <div className="logo">
                        <img src={Logo} />
                    </div>
                    <p>We have shoes that suits your style and which you’re proud to wear. From women to men.</p>
                    <div className="sm-icons">
                        <a href="">
                            <FaTwitter size={14} />
                        </a>
                        <a href="">
                            <FaFacebookF color='white' size={14} />
                        </a>
                        <a href="">
                            <FaInstagram size={14} />
                        </a>
                        <a href="">
                            <FaGithub size={14} />
                        </a>
                    </div>
                </div>
                <div className="footer-texts">
                    <div className="footer-text">
                        <h3>COMPANY</h3>
                        <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Features</a></li>
                        </ul>
                    </div>
                    <div className="footer-text">
                        <h3>HELP</h3>
                        <ul>
                            <li><a href="">Customer Support</a></li>
                            <li><a href="">Delivery Details</a></li>
                            <li><a href="">Terms & Conditions</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-text">
                        <h3>FAQ</h3>
                        <ul>
                            <li><a href="">Account</a></li>
                            <li><a href="">Manage Deliveries</a></li>
                            <li><a href="">Orders</a></li>
                            <li><a href="">Payments</a></li>
                        </ul>
                    </div>
                    <div className="footer-text">
                        <h3>RESOURCES</h3>
                        <ul>
                            <li><a href="">Youtube Playlist</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="main-footer-down">
                <p>Shopper © 2024, All Rights Reserved</p>
                <div className="gateways">
                    <a href="">
                        <RiVisaLine size={24} />
                    </a>
                    <a href="">
                        <RiMastercardFill size={24} />
                    </a>
                    <a href="">
                        <FaCcPaypal size={24} />
                    </a>
                    <a href="">
                        <FaApplePay size={24} />
                    </a>
                    <a href="">
                        <FaGooglePay size={24} />
                    </a>
                </div>
            </div>
        </div>
    </footer>
    )
}