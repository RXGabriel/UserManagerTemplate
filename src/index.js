import OrderBusiness from "./business/orderBusiness.js"
import Order from "./entities/order.js"

const order = new Order({
    customerID: 'abc123',
    amount: 300.000,
    products: [{
        description: 'Mercedes'
    }]
})

const orderBusiness = new OrderBusiness()
console.info('orderCreated', orderBusiness.create(order))