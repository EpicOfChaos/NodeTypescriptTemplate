import {DIList} from './ioc.config'
import { Container } from 'inversify'

let container = new Container({defaultScope: 'Singleton'})
for(let c of DIList) {
    container.bind(c).toSelf()
}

export { container }