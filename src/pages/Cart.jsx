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

export default function Cart(props) {

    const {actions} = props
    const {decrease, increase, remove} = (actions)

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
                increase={increase}
                decrease={decrease}
                remove={remove}
            />
        )
    })

    return (
        <Wrapper>
            <main>
                <div class="mini-nav">
                    <NavLink to='/'>Home</NavLink>
                    <RxCaretRight />
                    <NavLink to='/cart' className={({isActive})=> isActive ? "current" : undefined}>Cart</NavLink>
                </div>

                <section>
                    <h1>My cart</h1>
                    {
                        cart.length === 0 ? 
                        <EmptyCart /> : 
                            <div class={styles.itemsContainer}>
                        <div class={styles.items}>
                            {items}
                        </div>
                        <div class={styles.orderSummary}>
                            <h2>Order Summary</h2>
                            <div class={styles.orderDetails}>
                              <Row label="Subtotal" value={subTotal.toFixed(2)}  />
                              <Row label={`Discount (-${discount.toFixed(2)}%)`} value={discountAmount.toFixed(2)} isDiscount={true} />
                              <Row label="Delivery Fee" value={deliveryFee.toFixed(2)} />
                              
                              <TotalRow value={totalAmount.toFixed(2)} />
                             
                            </div>
                            <form>
                                <div class={styles.input}>
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