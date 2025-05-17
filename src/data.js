
import Beige from './images/beige-shoes.png'
import Brown from './images/brown-sneakers.png'
import Red from './images/red-shoes.png' 
import Orange from './images/orange-white-sneakers.png' 
import Allstar from './images/all-star-sneakers.png' 
import Pink from './images/pink-nike.png'  
import RedSneakers from  './images/red-sneakers.png' 
import Black from './images/black-nike.png'  

const data = [
    {
        id: 1,
        name: "Beige Shoes",
        size: "Large",
        color: "White and beige",
        price: 120,
        discount: 0,
        rating: 4.5,
        img: Beige 
    },
    {
        id: 2,
        name: "Brown Sneakers",
        size: "Large",
        color: "Brown",
        price: 240,
        discount: 20,
        rating: 3.5,
        img: Brown
    },
    {
        id: 3,
        name: "Red Shoes",
        size: "Medium",
        color: "Red",
        price: 180,
        discount: 0,
        rating: 4.5,
        img: Red 
    },
    {
        id: 4,
        name: "Orange White Sneakers",
        size: "Medium",
        color: "White and orange",
        price: 160,
        discount: 30,
        rating: 4.5,
        img:  Orange
    },
    {
        id: 5,
        name: "Allstar Sneakers",
        size: "Large",
        color: "Black",
        price: 232,
        discount: 20,
        rating: 5,
        img:  Allstar
    },
    {
        id: 6,
        name: "Pink Nike",
        size: "Medium",
        color: "Pink",
        price: 145,
        discount: 0,
        rating: 4,
        img: Pink
    },
    {
        id: 7,
        name: "Red Sneakers",
        size: "Large",
        color: "Red",
        price: 80,
        discount: 0,
        rating: 3,
        img: RedSneakers
    },
    {
        id: 8,
        name: "Black Nike",
        size: "Medium",
        color: "Black",
        price: 210,
        discount: 0,
        rating: 4.5,
        img: Black
    }
];



export const updatedItems = data.map((item)=>{

    let discountedPrice = 0

    if (item.discount) {
        discountedPrice = item.price - (item.price * (item.discount / 100))
    } else {
        discountedPrice = item.price
    }
 
    return {...item, discountedPrice: discountedPrice, qty: 1, selected: false}
})
