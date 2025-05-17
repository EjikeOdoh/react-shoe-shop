import { MdMailOutline } from 'react-icons/md'
import Logo from '../images/logo.png'
import { FaApplePay, FaCcPaypal, FaFacebookF, FaGithub, FaGooglePay, FaInstagram, FaTwitter } from 'react-icons/fa'
import { RiVisaLine } from 'react-icons/ri'
import { SiMastercard } from 'react-icons/si'

const year = new Date().getFullYear()

export default function Footer() {
    return (
        <footer>
        <div class="cta">
          <h1>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h1>
          <form>
            <div class="input">
             <MdMailOutline size={24} />
              <input type="email" placeholder="Enter your email address" />
            </div>
            <button>Subscribe to Newsletter</button>
          </form>
        </div>
        <div class="main-footer">
          <div class="main-footer-up">
            <div class="footer-logo">
              <div class="logo">
                <img src={Logo} />
              </div>
              <p>We have shoes that suits your style and which you’re proud to wear. From women to men.</p>
              <div class="sm-icons">
                <a href="">
                    <FaTwitter size={14} />
                </a>
                <a href="">
                    <FaFacebookF size={14} color='white' />
                </a>
                <a href="">
                    <FaInstagram size={14} /> 
                </a>
                <a href="">
                    <FaGithub size={14} />
                </a>
              </div>
            </div>
            <div class="footer-texts">
              <div class="footer-text">
                <h3>COMPANY</h3>
                <ul>
                  <li><a href="">About</a></li>
                  <li><a href="">Features</a></li>
                </ul>
              </div>
              <div class="footer-text">
                <h3>HELP</h3>
                <ul>
                  <li><a href="">Customer Support</a></li>
                  <li><a href="">Delivery Details</a></li>
                  <li><a href="">Terms & Conditions</a></li>
                  <li><a href="">Privacy Policy</a></li>
                </ul>
              </div>
              <div class="footer-text">
                <h3>FAQ</h3>
                <ul>
                  <li><a href="">Account</a></li>
                  <li><a href="">Manage Deliveries</a></li>
                  <li><a href="">Orders</a></li>
                  <li><a href="">Payments</a></li>
                </ul>
              </div>
              <div class="footer-text">
                <h3>RESOURCES</h3>
                <ul>
                  <li><a href="">Youtube Playlist</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="main-footer-down">
            <p>Shopper © {year}, All Rights Reserved</p>
            <div class="gateways">
              <a href="">
                <RiVisaLine size={32} />
              </a>
              <a href="">
                <SiMastercard size={32} />
              </a>
              <a href="">
                <FaCcPaypal size={32} />
              </a>
              <a href="">
                <FaApplePay size={32} />
              </a>
              <a href="">
                <FaGooglePay size={32} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
}