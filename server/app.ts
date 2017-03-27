import express = require('express')
import cookieParser = require('cookie-parser')
import bodyParser = require('body-parser')
import {HttpError} from './errors/http-error'
import {rootRoutes} from './routes/index'

export const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use('/', rootRoutes)

// catch 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
    let err = new HttpError('Not Found')
    err.status = 404
    next(err)
})

// error handler
app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.send(err.message)
})