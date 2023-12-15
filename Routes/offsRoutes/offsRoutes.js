const dataBase = require('../../db/dataBase')
const express = require('express')
const offsRouter = express.Router()

// routes
offsRouter.get('/', (req, res) => {
    let addOffsQurey = 'SELECT offs.id, offs.code, offs.date, offs.isActive, offs.percent, Admins.firstname as adminID, Products.title as productID FROM offs INNER JOIN Admins ON Admins.id = offs.adminID INNER JOIN Products ON Products.id = offs.productID'
    dataBase.query(addOffsQurey, (error, result) => {
        if (error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

offsRouter.delete('/:offID', (req, res) => {
    let offID = req.params.offID
    let deleteOffqurey = `DELETE FROM offs WHERE id = ${offID}`
    dataBase.query(deleteOffqurey, (error, result) => {
        if (error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

offsRouter.put('/active/:offID', (req, res) => {
    let offID = req.params.offID
    let activeOffQurey = `UPDATE offs SET isActive = 1 WHERE id = ${offID}`
    dataBase.query(activeOffQurey, (error, result) => {
        if (error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })

})

offsRouter.put('/reject/:offID', (req, res) => {
    let offID = req.params.offID
    let activeOffQurey = `UPDATE offs SET isActive = 0 WHERE id = ${offID}`
    dataBase.query(activeOffQurey, (error, result) => {
        if (error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })

})

module.exports = offsRouter