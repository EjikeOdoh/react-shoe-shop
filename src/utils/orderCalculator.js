export default function orderCalculator(arr) {
    const subTotal = arr.reduce((x, y) => {
        const totalCost = y.qty * y.price
        return x + totalCost
    }, 0)


    const discountAmount = arr.reduce((x, y) => {
        const totalDiscount = y.qty * (y.price - y.discountedPrice)
        return x + totalDiscount
    }, 0)

    const discount = ((discountAmount) / subTotal) * 100
    const deliveryFee = 20

    const totalAmount = subTotal + deliveryFee - discountAmount

    return {
        subTotal: subTotal,
        discountAmount: discountAmount,
        discount: discount,
        deliveryFee: deliveryFee,
        totalAmount: totalAmount
    }
}