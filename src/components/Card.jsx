import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import styles from '../styles/card.module.css'
import { useContext } from 'react'
import { CartDispatchContext } from '../contexts/CartContext'

export default function Card(props) {

    const dispatch = useContext(CartDispatchContext)

    return (
        <div className={styles.productCard}>
            <div className={styles.productImg}>
                <img src={props.image} />
                <button disabled={props.isSelected} onClick={() => dispatch({
                    type: 'add',
                    id: props.id
                })}>
                    <PiShoppingCartSimpleBold size={24} />
                </button>
            </div>
            <div className={styles.productTexts}>
                <h3>{props.name}</h3>
                <div className="rating-container">
                    <span>Rating</span>
                    <span> {props.rating}/5</span>
                </div>
                <div className={styles.priceContainer}>
                    <h2 className="price">${props.discountedPrice}</h2>
                    {
                        props.discount ?
                            <>
                                <h2 className={styles.dp}>${props.price}</h2>
                                <p className={styles.discount}>-{props.discount}%</p>
                            </>
                            : null
                    }
                </div>
            </div>
        </div>
    )
}