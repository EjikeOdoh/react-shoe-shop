import styles from '../styles/home.module.css'
import Wrapper from "../components/Wrapper";
import BigShoe from "../images/main-shoe-image.svg"
import { FaArrowRight } from 'react-icons/fa';
import Card from '../components/Card';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function Home() {

    const shoes = useContext(CartContext)
   
    const cards = shoes.map(shoe=>{
        return (
            <Card 
                key={shoe.id}
                id={shoe.id}
                image={shoe.img}
                name={shoe.name}
                discount={shoe.discount}
                discountedPrice={shoe.discountedPrice}
                price={shoe.price}
                isSelected={shoe.selected}
                rating={shoe.rating}
            />
        )
    })
    return (
        <Wrapper>
            <main>
                <section className={styles.hero}>
                    <div className={styles.heroTexts}>
                        <h1>
                            FIND SHOES THAT <span>MATCHES</span> YOUR STYLE
                        </h1>
                        <p>Browse through our diverse range of meticulously crafted shoes, designed to bring out your
                            individuality and cater to your sense of style.</p>
                        <button>Shop Now</button>

                    </div>
                    <div className={styles.heroImg}>
                        <img src={BigShoe} />
                    </div>
                </section>

                <section className={styles.products}>
                    <h1>PRODUCTS</h1>
                    <div className={styles.productsContainer}>
                        {cards}
                    </div>
                    <a href="#">View more <FaArrowRight size={24} /> </a>
                </section>
            </main>
        </Wrapper>
    )
}