
import { CgShoppingCart } from 'react-icons/cg'
import Logo from '../images/logo.png'
import { RxAvatar } from 'react-icons/rx'
import { HiMenuAlt2 } from 'react-icons/hi'

export default function Header() {
    return (
        <header>
        <button>
            <HiMenuAlt2 size={32}  />
        </button>
        <nav>
          <div class="logo">
            <img src={Logo} />
          </div>
          <ul class="main-menu">
            <li><a href="">Shop</a></li>
            <li><a href="">On Sale</a></li>
            <li><a href="">New Arrivals</a></li>
          </ul>
          <div class="cart-container">
           
            <a href="cart.html">
                <CgShoppingCart size={24} />
            </a>
            <a href="">
                <RxAvatar size={24} />
            </a>
          </div>
        </nav>
      </header>
    )
}