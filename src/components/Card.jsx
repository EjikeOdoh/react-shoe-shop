import { CgShoppingCart } from "react-icons/cg";

export default function Card(props) {
    return (
        <div class={"product-card"}>
            <div class="product-img">
                <img src={props.image} />
                <button> <CgShoppingCart size={24} /></button>
            </div>
            <div class="product-texts">
                <h3>{props.name}</h3>
                <div class="rating-container">
                    <span>Rating</span>
                    <span>{props.rating}/5</span>
                </div>
                <div class="price-container">
                    <h2 class="price">${props.discountedPrice}</h2>
                    <h2 class="dp">${props.price}</h2>
                    <p class="discount">-{props.discount}%</p>
                </div>
            </div>
        </div>
    )
}