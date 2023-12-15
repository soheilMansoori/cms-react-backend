const dataBase = require('../../db/dataBase')
const express = require('express')
const adminRouter = express.Router()

adminRouter.get('/', (req, res) => {
    let adminToken = req.headers.jwt
    let adminQurey = `SELECT * FROM Admins WHERE token = "${adminToken}"`
    dataBase.query(adminQurey, (error, result) => {
        if (error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(result)
        }
    })
})

module.exports = adminRouter