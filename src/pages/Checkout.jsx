
import styles from '../styles/checkout.module.css'

import { RxCaretRight } from "react-icons/rx";
import Wrapper from "../components/Wrapper";
import { FaArrowRight, FaPaypal } from 'react-icons/fa';
import Row from '../components/Row';
import TotalRow from '../components/TotalRow';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import orderCalculator from '../utils/orderCalculator';
import { NavLink } from 'react-router';

export default function Checkout() {

    // destructured cart context value
    const { cart } = useContext(CartContext)
    const { deliveryFee, discount, discountAmount, subTotal, totalAmount } = orderCalculator(cart)

    const items = cart.map(shoe=>{
        return (
            <Row
                key={shoe.id}
                label={`${shoe.name} (x${shoe.qty})`}
                value={(shoe.discountedPrice * shoe.qty).toFixed(2)}
            />
        )
    })


    return (
        <Wrapper>
            <main>
                <div class="mini-nav">
                    <NavLink to='/' className={({isActive})=> isActive ? "current" : undefined}>Home</NavLink>
                    <RxCaretRight />
                    <NavLink to='/cart' className={({isActive})=> isActive ? "current" : undefined}>Cart</NavLink>
                    <RxCaretRight />
                    <NavLink to='/checkout' className={({isActive})=> isActive ? "current" : undefined}>Checkout</NavLink>              
                </div>

                <section>
                    <h1>Checkout</h1>
                    <form class={styles.itemsContainer}>
                        <div class={styles.billingDetails}>
                            <h2>
                                Billing Details
                            </h2>
                            <div class={styles.fullname}>
                                <input type="text" name="firstName" id="" placeholder="First Name" required />
                                <input type="text" name="lastName" id="" placeholder="Last Name" required />
                            </div>
                            <input type="text" name="companyName" id="" placeholder="Company Name" />
                            <input type="text" name="country" id="" placeholder="Country" required />
                            <input type="text" name="streetAddress" id="" placeholder="Stress Address" required />
                            <input type="text" name="postalCode" id="" placeholder="Post code/Zip" />
                            <input type="text" name="town" id="" placeholder="Town/City" required />
                            <input type="text" name="phone" id="" placeholder="Phone" required />
                            <input type="email" name="email" id="" placeholder="Email" required />
                            <label><input type="checkbox" name="createAccount" /><span>Create an account?</span></label>
                            <label><input type="checkbox" name="differentAddress" />
                                <span>Ship to a different address</span></label>
                            <input type="text" name="orderNotes" id="" placeholder="Order notes" />
                        </div>
                        <hr />
                        <div class={styles.orderSummary}>
                            <h2>Order Summary</h2>
                            <div class={styles.orderDetails}>
                                <Row label="PRODUCT" value="TOTAL" notFigure={true} />
                                <div class={styles.items}>
                                    {items}
                                </div>
                                <Row label={`Discount (-${discount.toFixed(2)}%)`} value={discountAmount.toFixed(2)} isDiscount={true} />
                                <Row label="Delivery Fee" value={deliveryFee.toFixed(2)} />

                                <TotalRow value={totalAmount.toFixed(2)} />
                            </div>
                            <div class={styles.paymentOptions}>
                                <label>
                                    <input type="radio" name="gateway" required value="bank-transfer" />Direct bank transfer
                                </label>
                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment
                                    reference. Your order will not be shipped until the funds have cleared in our account</p>
                                <label>
                                    <input type="radio" name="gateway" required value="cheque" />Cheque payments
                                </label>
                                <label>
                                    <input type="radio" name="gateway" required value="cod" />Cash on delivery
                                </label>
                                <label class={styles.paypal}>
                                    <input type="radio" name="gateway" required value="paypal" />PayPal
                                    <FaPaypal size={24} />
                                </label>
                            </div>
                            <button>Place Order <FaArrowRight size={24} /></button>
                        </div>
                    </form>
                </section>
            </main>
        </Wrapper>
    )
}