const express = require('express')
const dataBase = require('../../db/dataBase')
const ordersRouter = express.Router()

// routes
ordersRouter.get('/', (req, res) => {
    let allOrdersQurey = 'SELECT Orders.id, Orders.date, Orders.hour, Orders.price, Orders.off, Orders.sale, Orders.popularity, Orders.count, Orders.sale_count, Orders.isActive, Users.firstname as userID, Products.title as productID FROM Orders INNER JOIN Users ON Users.id = Orders.userID INNER JOIN Products ON Products.id = Orders.productID'
    dataBase.query(allOrdersQurey, (error, result) => {
        if (error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

ordersRouter.delete('/:orderID', (req, res) => {
    let orderID = req.params.orderID
    let deleteOrderQurey = `DELETE FROM Orders WHERE id = ${orderID}`
    dataBase.query(deleteOrderQurey, (error, result) => {
        if (error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

ordersRouter.put('/active/:orderID/', (req, res) => {
    let orderID = req.params.orderID
    let activeOderQurey = `UPDATE Orders SET isActive = 1 WHERE id = ${orderID}`
    dataBase.query(activeOderQurey, (error, result) => {
        if (error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

ordersRouter.put('/reject/:orderID/', (req, res) => {
    let orderID = req.params.orderID
    let activeOderQurey = `UPDATE Orders SET isActive = 0 WHERE id = ${orderID}`
    dataBase.query(activeOderQurey, (error, result) => {
        if (error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


module.exports = ordersRouter