import Row from '../components/Row';
import '../styles/checkout.css'
import { FaCaretRight } from "react-icons/fa6";
import { CgPaypal } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import Container from '../components/Container';
import TotalRow from '../components/TotalRow';

export default function CheckOut() {
    return (
        <Container>
            <main>
                <div className="mini-nav">
                    <a href="index.html">Home</a>
                    <FaCaretRight size={16} />
                    <a href="cart.html">Cart</a>
                    <FaCaretRight size={16} />
                    <a href="" className="current">Checkout</a>
                </div>

                <section>
                    <h1>Checkout</h1>
                    <form className="items-container">
                        <div className="billing-details">
                            <h2>
                                Billing Details
                            </h2>
                            <div className="fullname">
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
                        <div className="order-summary">
                            <h2>Order Summary</h2>
                            <div className="order-details">
                                <div className="det">
                                    <p className="label">PRODUCT</p>
                                    <p className="value">TOTAL</p>
                                </div>

                                <Row label={`Discount (${0.1})`} value={12} />

                                <div className="det">
                                    <p className="label">Discount <span>(-20%)</span></p>
                                    <p id="discount" className="value">-$133</p>
                                </div>
                                <div className="det">
                                    <p className="label">Delivery Fee</p>
                                    <p id="delivery-fee" className="value">$15</p>
                                </div>

                                <TotalRow label="Total" value={467} />
                           
                            </div>
                            <div className="payment-options">
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
                                <label className="paypal">
                                    <input type="radio" name="gateway" required value="paypal" />PayPal
                                    <CgPaypal />
                                </label>
                            </div>
                            <button>Place Order <FaArrowRight /></button>
                        </div>
                    </form>
                </section>
            </main>
        </Container>
    )
}