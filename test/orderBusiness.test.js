import { expect, describe, test, jest, beforeEach } from '@jest/globals'
import Order from '../src/entities/order'
import OrderBusiness from '../src//business/orderBusiness.js'

describe.only('Test suit for Template Method design pattern', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    describe('#OrderBusiness', () => {
        test('execution Order Business without Template Method', () => {
            const order = new Order({
                customerID: 1,
                amount: 100.000,
                products: [{ description: "Ferrari" }]
            })

            const orderBusiness = new OrderBusiness()
            const isValid = orderBusiness._validateRequiredFields(order)
            expect(isValid).toBeTruthy()

            const result = orderBusiness._create(order)
            expect(isValid).toBeTruthy()

        })
    })
})