import express from  'express'
import configViewEngine from './configs/viewEngine'
import initwebRoute from './route/web'
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001

// setup view engine
configViewEngine(app)
//init web router
initwebRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})