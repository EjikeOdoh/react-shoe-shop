import styles from '../styles/home.module.css'
import Container from "../components/Container";
import Shoe from "../images/main-shoe-image.svg"
import Card from '../components/Card';
import { useState } from 'react';
import { updatedItems } from '../data';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
    const [shoesList, setShoesList] = useState(updatedItems)

    const shoes = shoesList.map(shoe=>(
        <Card
            key={shoe.id}
            id={shoe.id}
            name={shoe.name}
            price={shoe.price}
            rating={shoe.rating}
            discountedPrice={shoe.discountedPrice}
            discount={shoe.discount}
            image={shoe.img}
        />
    ))
    return (
        <Container>
            <main className={styles.main}>
                <section class={styles.hero}>
                    <div class={styles.heroTexts}>
                        <h1>
                            FIND SHOES THAT <span>MATCHES</span> YOUR STYLE
                        </h1>
                        <p>Browse through our diverse range of meticulously crafted shoes, designed to bring out your
                            individuality and cater to your sense of style.</p>
                        <button>Shop Now</button>

                    </div>
                    <div class={styles.heroImg}>
                        <img src={Shoe} />
                    </div>
                </section>

                <section class={styles.products}>
                    <h1>PRODUCTS</h1>
                    <div class={styles.productsContainer}>
                    {shoes}
                    </div>
                    <a href="#">View more <FaArrowRight size={24} /> </a>
                </section>
            </main>
        </Container>
    )
}