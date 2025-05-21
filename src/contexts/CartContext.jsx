import { createContext, useReducer } from "react";
import updatedItems from "../data";


export const CartContext = createContext(null)
export const CartDispatchContext = createContext(null)


function cartReducer(state, action) {
    switch (action.type) {
      case "add": {
        return state.map(shoe => {
          if (shoe.id === action.id) {
            return { ...shoe, selected: true }
          } else {
            return shoe
          }
        })
      }
  
      case "increase": {
        return state.map(shoe => {
          if (shoe.id === action.id) {
            return { ...shoe, qty: shoe.qty + 1 }
          } else {
            return shoe
          }
        })
      }
  
      case "decrease": {
        return state.map(shoe => {
          if (shoe.id === action.id) {
            if (shoe.qty === 1) {
              return shoe
            } else {
              return { ...shoe, qty: shoe.qty - 1 }
            }
          } else {
            return shoe
          }
        })
      }
  
      case "remove": {
        return state.map(shoe => {
          if (shoe.id === action.id) {
            return { ...shoe, qty: 1, selected: false }
          } else {
            return shoe
          }
        })
      }
  
      default: {
        throw new Error('Action unknown')
      }
  
    }
  }


export default function CartProvider(props) {
    const [shoes, dispatch] = useReducer(cartReducer, updatedItems)
    const cart = shoes.filter(shoe => shoe.selected === true)

    return (
        <CartContext value={{
            shoes: shoes,
            cart: cart
          }}>
            <CartDispatchContext value={dispatch}>
                {props.children}
            </CartDispatchContext>
        </CartContext>
        

    )
}