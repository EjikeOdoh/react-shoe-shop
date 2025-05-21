import { FaMinus, FaPlus } from 'react-icons/fa';
import styles from '../styles/item.module.css'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useContext } from 'react';
import { CartDispatchContext } from '../contexts/CartContext';

export default function Item(props) {

    const dispatch = useContext(CartDispatchContext)

    return (
        <div className={styles.itemCard}>
            <div className={styles.itemImg}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className={styles.itemTexts}>
                <div className={styles.up}>
                    <div className={styles.upTexts}>
                        <h2>{props.name}</h2>
                        <p>Size: <span>{props.size}</span></p>
                        <p>Color: <span>{props.color}</span></p>
                    </div>
                    <button onClick={() => dispatch({
                        type: 'remove',
                        id: props.id
                    })}>
                        <RiDeleteBin6Fill size={24} />
                    </button>
                </div>
                <div className={styles.down}>
                    <p>${props.price}</p>
                    <div className={styles.btns}>
                        <button onClick={() => dispatch({
                            type: 'decrease',
                            id: props.id
                        })}>
                            <FaMinus size={14} />
                        </button>
                        <span>{props.qty}</span>
                        <button onClick={() => dispatch({
                            type: 'increase',
                            id: props.id
                        })}>
                            <FaPlus size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}