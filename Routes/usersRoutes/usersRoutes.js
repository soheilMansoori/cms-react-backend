const dataBase = require('../../db/dataBase')
const express = require('express')
const usersRouter = express.Router()

// routes
usersRouter.get('/', (req, res) => {
    let allUsersQurey = 'SELECT * FROM Users'
    dataBase.query(allUsersQurey, (error, result) => {
        if (error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

usersRouter.delete('/:userID', (req, res) => {
    let userID = req.params.userID
    let deleteUserQurey = `DELETE FROM Users WHERE id = ${userID}`
    dataBase.query(deleteUserQurey, (error, result) => {
        if (error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

usersRouter.put('/:userID', (req, res) => {
    let body = req.body
    let userID = req.params.userID
    let editUserQurey = `UPDATE Users SET firstname='${body.firstname}',lastname='${body.lastname}',username='${body.username}',password='${body.password}',phone=${body.phone},city='${body.city}',email='${body.email}',address='${body.address}',score=${body.score},buy=${body.buy} WHERE id = ${userID}`
    dataBase.query(editUserQurey, (error, result) => { 
        if(error){
            console.log(error);
            res.send(JSON.stringify(error))
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

usersRouter.post('/new-user',(req,res) => {
    let body = req.body
    let addNewUserQurey = `` 
    dataBase.query(addNewUserQurey,(error,result) => {
        if(error){
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


module.exports = usersRouter