import express from 'express'
import homeController from '../controller/homeController'

let router = express.Router()

const initwebRoute = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/detail/user/:userId', homeController.getDetailPage)
    router.post('/create-new-user', homeController.createNewUser)
    router.get('/news', (req, res) => {
        res.send('con chim ca hats')
    })

    return app.use('/', router)
}

export default initwebRoute