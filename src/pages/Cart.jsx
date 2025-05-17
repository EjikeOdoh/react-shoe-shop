
import styles from '../styles/cart.module.css'
import Container from "../components/Container";
import CartItem from '../components/CartItem';
import { FaArrowRight, FaCaretRight } from 'react-icons/fa';
import Row from '../components/Row';
import TotalRow from '../components/TotalRow';
import { LiaTagSolid } from 'react-icons/lia';

export default function Cart(props) {
    return (
        <Container>
            <main className={styles.main}>
                <div class="mini-nav">
                    <a href="">Home</a>
                    <FaCaretRight size={16} />
                    <a href="" class="current">Cart</a>
                </div>

                <section>
                    <h1>My cart</h1>
                    <h1 class="notice hide">No item in cart!</h1>
                    <div class={styles.itemsContainer}>
                        <div class={styles.items}>
                            <CartItem />
                        </div>
                        <div class={styles.orderSummary}>
                            <h2>Order Summary</h2>
                            <div class={styles.orderDetails}>
                                <Row label="Subtotal" value={180} />
                                <Row label="Discount" value={0} color="red" />

                                <Row label="Delivery Fee" value={15} />
                                <TotalRow label="Total" value={200} />
                            </div>
                            <form>
                                <div class="input">

                                    <LiaTagSolid size={24} />

                                    <input type="text" placeholder="Apply promo code" />
                                </div>
                                <button>Apply</button>
                            </form>

                            <a href="./checkout.html">Go to Checkout <FaArrowRight size={24} /> </a>
                        </div>
                    </div>
                </section>
            </main>
        </Container>
    )
}