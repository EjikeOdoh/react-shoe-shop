import { BiMenuAltLeft } from "react-icons/bi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import Logo from '../images/logo.png'
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router";

export default function Header() {

    // Destructured cart from context value
    const { cart } = useContext(CartContext)

    return (
        <header>
            <button>
                <BiMenuAltLeft size={24} />
            </button>
            <nav>
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} />
                    </Link>

                </div>
                <ul className="main-menu">
                    <li><a href="">Shop</a></li>
                    <li><a href="">On Sale</a></li>
                    <li><a href="">New Arrivals</a></li>
                </ul>
                <div className="cart-container">
                    {cart.length}
                    <Link to='/cart'>
                        <PiShoppingCartSimpleBold size={24} />
                    </Link>
                    <a href="">
                        <RxAvatar size={24} />
                    </a>
                </div>
            </nav>
        </header>
    )
}