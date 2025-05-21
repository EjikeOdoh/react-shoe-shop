import styles from '../styles/cart.module.css'

import { RxCaretRight } from "react-icons/rx";
import Wrapper from "../components/Wrapper";
import { FaArrowRight } from "react-icons/fa";
import Item from "../components/Item";
import EmptyCart from '../components/EmptyCart';
import { GoTag } from 'react-icons/go';
import Row from '../components/Row';
import TotalRow from '../components/TotalRow';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import orderCalculator from '../utils/orderCalculator';
import { Link, NavLink } from 'react-router';

export default function Cart() {

    // Destructured from context value
    const {cart} = useContext(CartContext)
    const {deliveryFee, discount, discountAmount, subTotal, totalAmount} = orderCalculator(cart)

    const items = cart.map(shoe=>{
        return (
            <Item
                key={shoe.id}
                id={shoe.id}
                image={shoe.img}
                name={shoe.name}
                size={shoe.size}
                color={shoe.color}
                price={shoe.discountedPrice}
                qty={shoe.qty}
            />
        )
    })

    return (
        <Wrapper>
            <main>
                <div className="mini-nav">
                    <NavLink to='/'>Home</NavLink>
                    <RxCaretRight />
                    <NavLink to='/cart' className={({isActive})=> isActive ? "current" : undefined}>Cart</NavLink>
                </div>

                <section>
                    <h1>My cart</h1>
                    {
                        cart.length === 0 ? 
                        <EmptyCart /> : 
                            <div className={styles.itemsContainer}>
                        <div className={styles.items}>
                            {items}
                        </div>
                        <div className={styles.orderSummary}>
                            <h2>Order Summary</h2>
                            <div className={styles.orderDetails}>
                              <Row label="Subtotal" value={subTotal.toFixed(2)}  />
                              <Row label={`Discount (-${discount.toFixed(2)}%)`} value={discountAmount.toFixed(2)} isDiscount={true} />
                              <Row label="Delivery Fee" value={deliveryFee.toFixed(2)} />
                              
                              <TotalRow value={totalAmount.toFixed(2)} />
                             
                            </div>
                            <form>
                                <div className={styles.input}>
                                    <GoTag size={24} />
                                    <input type="text" placeholder="Apply promo code" />
                                </div>
                                <button>Apply</button>
                            </form>

                            <Link to='/checkout'>Go to Checkout <FaArrowRight size={24} /></Link>
                        </div>
                    </div>
                    }                
                </section>
            </main>
        </Wrapper>
    )
}