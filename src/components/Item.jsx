import { FaMinus, FaPlus } from 'react-icons/fa';
import styles from '../styles/item.module.css'
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function Item(props) {
    return (
        <div class={styles.itemCard}>
        <div class={styles.itemImg}>
            <img src={props.image} alt={props.name} />
        </div>
        <div class={styles.itemTexts}>
            <div class={styles.up}>
                <div class={styles.upTexts}>
                    <h2>{props.name}</h2>
                    <p>Size: <span>{props.size}</span></p>
                    <p>Color: <span>{props.color}</span></p>
                </div>
                <button onClick={()=>props.remove(props.id)}>
                    <RiDeleteBin6Fill size={24} />
                </button>
            </div>
            <div class={styles.down}>
                <p>${props.price}</p>
                <div class={styles.btns}>
                    <button onClick={()=>props.decrease(props.id)}>
                        <FaMinus size={14} />
                    </button>
                    <span>{props.qty}</span>
                    <button onClick={()=>props.increase(props.id)}>
                        <FaPlus size={14} />
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}