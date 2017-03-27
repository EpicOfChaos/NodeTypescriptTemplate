import {TestService} from './test.service'
import {expect} from 'chai'

describe('TestService', () => {
    let testService:TestService
    beforeEach(() => {
        testService = new TestService()
    })

    describe('#health', () => {

        it('should return "OK"', () => {
            expect(testService.health()).to.eql('OK')
        })
    })
})