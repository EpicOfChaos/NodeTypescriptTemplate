import express = require('express')
import {TestService} from '../services/test/test.service'
import {container} from '../ioc'
export const rootRoutes = express.Router()

rootRoutes.get('/health', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    let testService = container.get<TestService>(TestService)
    res.send(testService.health())
})

rootRoutes.get('/prime/:n', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    let testService = container.get<TestService>(TestService)
    res.send(testService.prime(req.params.n))
})
