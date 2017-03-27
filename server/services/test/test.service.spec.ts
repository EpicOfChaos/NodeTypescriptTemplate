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

    describe('#prime', () => {
        [
            {
                input: -1,
                output: false
            },
            {
                input: 0,
                output: false
            },
            {
                input: 1,
                output: false
            },
            {
                input: 2,
                output: true
            },
            {
                input: 3,
                output: true
            },
            {
                input: 101,
                output: true
            },
            {
                input: 821,
                output: true
            },
            {
                input: 997,
                output: true
            }
        ].forEach((testCase) => {
            context('Input: ' + testCase.input, () => {
                it('should return: ' + testCase.output, () => {
                    expect(testService.prime(testCase.input)).to.eql(testCase.output)
                })
            })
        })
    })
})