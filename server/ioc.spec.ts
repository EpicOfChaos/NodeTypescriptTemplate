import {DIList} from './ioc.config'
import {container} from './ioc'
describe('testing IOC', () => {
    DIList.forEach((service) => {
        it('should not throw error', () => {
            container.get(service)
        })
    })
})