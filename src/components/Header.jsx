import { BiMenuAltLeft } from "react-icons/bi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import Logo from '../images/logo.png'

export default function Header() {

    const count = 1

    return (
        <header>
        <button>
            <BiMenuAltLeft size={24} />
        </button>
        <nav>
            <div className="logo">
                <img src={Logo} />
            </div>
            <ul className="main-menu">
                <li><a href="">Shop</a></li>
                <li><a href="">On Sale</a></li>
                <li><a href="">New Arrivals</a></li>
            </ul>
            <div className="cart-container">
                {count}
                <a href="cart.html">
                    <PiShoppingCartSimpleBold size={24} />
                </a>
                <a href="">
                    <RxAvatar size={24} />
                </a>
            </div>
        </nav>
    </header>
    )
}