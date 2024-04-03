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
        test('execution Order Business with Template Method', () => {
            const order = new Order({
                customerID: 1,
                amount: 100.000,
                products: [{ description: "Ferrari" }]
            })
            const orderBusiness = new OrderBusiness()
            const calledValidationFn = jest.spyOn(
                orderBusiness,
                orderBusiness._validateRequiredFields.name
            )
            const calledCreateFn = jest.spyOn(
                orderBusiness,
                orderBusiness._create.name
            )
            const result = orderBusiness.create(order)

            expect(result).toBeTruthy()
            expect(calledValidationFn).toHaveBeenCalled()
            expect(calledCreateFn).toHaveBeenCalled()
        })
    })
})