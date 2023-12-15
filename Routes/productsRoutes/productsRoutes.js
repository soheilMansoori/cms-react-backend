const dataBase = require('../../db/dataBase')
const express = require('express')
const productsRouter = express.Router()

// routes

productsRouter.get('/', (req, res) => {
    let selectAllProductsQurey = 'SELECT * FROM Products'
    dataBase.query(selectAllProductsQurey, (error, result) => {
        if (error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

productsRouter.delete('/:productID', (req, res) => {
    let productID = req.params.productID
    let deleteProductQurey = `DELETE FROM Products WHERE id = ${productID}`
    dataBase.query(deleteProductQurey, (error, result) => {
        if (error) {
            console.log(err);
            res.send(JSON.stringify(null))
        } else {
            // res.send(JSON.stringify(result))
            res.send(JSON.stringify('products deleted sucsessfully'))
        }
    })
})

productsRouter.put('/:productID', (req, res) => {
    let productID = req.params.productID
    let body = req.body
    let updateProductQurey = `UPDATE Products SET title ='${body.title}',price=${body.price},count=${body.count},img='${body.img}',popularity=${body.popularity},sale=${body.sale},colors=${body.colors} WHERE id = ${productID}`
    dataBase.query(updateProductQurey, (error, result) => {
        if (error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

productsRouter.post('/new-product', (req, res) => {
    console.log(req.body);
    let body = req.body
    let addNewProductQurey = `INSERT INTO Products(title, price, count, img, popularity, sale, colors) VALUES ('${body.title}',${body.price},${body.count},'${body.img}',${body.popularity},${body.sale},${body.colors})`
    dataBase.query(addNewProductQurey, (error, result) => {
        if (error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

module.exports = productsRouter