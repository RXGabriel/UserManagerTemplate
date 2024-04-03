export default class Order {
    constructor({ customerID, amount, products }) {
        this.customerID = customerID
        this.amount = amount
        this.products = products
    }
}