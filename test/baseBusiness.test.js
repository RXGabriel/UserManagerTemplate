import { expect, describe, test, jest, beforeEach } from '@jest/globals'
import BaseBusiness from '../src/business/base/baseBusiness.js'
import { NotImplementedException } from '../src/util/exceptions.js'

describe('#BaseBusiness', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })
    test('should throw an error when child class doesn\'t implement _validateRequiredFields function', () => {
        class ConcreteClass extends BaseBusiness { }
        const concreteClass = new ConcreteClass()
        const validationError = new NotImplementedException(concreteClass._validateRequiredFields.name)

        expect(() => concreteClass.create({})).toThrow(validationError)
    })
    test('should throw an error when _validateRequiredFields returns false', () => {
        const VALIDATION_DOESNT_SUCCEEDED = false
        class ConcreteClass extends BaseBusiness {
            _validateRequiredFields = jest.fn().mockReturnValue(VALIDATION_DOESNT_SUCCEEDED)
        }
        const concreteClass = new ConcreteClass()
        const validationError = new Error(`invalid data`)

        expect(() => concreteClass.create({})).toThrow(validationError)
    })
})