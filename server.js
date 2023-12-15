const dataBase = require('./db/dataBase')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const productsRouter = require('./Routes/productsRoutes/productsRoutes')
const commentRouter = require('./Routes/commentsRoutes/commentsRoutes')
const usersRouter = require('./Routes/usersRoutes/usersRoutes')
const ordersRouter = require('./Routes/ordersRoutes/ordersRoutes')
const offsRouter = require('./Routes/offsRoutes/offsRoutes')
const adminRouter = require('./Routes/adminRouter/adminRouter')
const port = 8080

const server = express()

server.use(cors())
server.use(bodyParser.json())

// routes
server.use('/api/products', productsRouter)
server.use('/api/comments', commentRouter)
server.use('/api/users', usersRouter)
server.use('/api/orders', ordersRouter)
server.use('/api/offs', offsRouter)
server.use('/api/admins', adminRouter)


server.listen(port, () => {
    console.log(`Server Run On Port : ${port}`);
})