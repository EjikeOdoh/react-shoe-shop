import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

export default function CartItem(props) {
    return (
        <div class="item-card">
        <div class="item-img">
            <img src={props.image} alt={props.name} />
        </div>
        <div class="item-texts">
            <div class="up">
                <div class="up-texts">
                    <h2>{props.name}</h2>
                    <p>Size: <span>{props.size}</span></p>
                    <p>Color: <span>{props.color}</span></p>
                </div>
                <button>
                  <FaTrash size={20} />
                </button>
            </div>
            <div class="down">
                <p>${props.discountedPrice}</p>
                <div class="btns">
                    <button>
                        <FaMinus size={12} />
                    </button>
                    <span>{props.qty}</span>
                    <button>
                        <FaPlus size={12} />
                    </button>
                </div>
            </div>
        </div>
    </div>   
    )
}