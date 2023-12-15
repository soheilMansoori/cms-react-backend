const dataBase = require('../../db/dataBase')
const express = require('express')
const commentRouter = express.Router()

// routes

commentRouter.get('/', (req, res) => {
    let allCommentsQurey = 'SELECT Comments.id, Comments.isAccept , Comments.body, Comments.date, Comments.hour, Users.firstname as userID, Products.title as productID FROM Comments INNER JOIN Users ON Users.id = Comments.userID INNER JOIN Products ON Products.id = Comments.productID'
    dataBase.query(allCommentsQurey, (error, result) => {
        if (error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

commentRouter.delete('/:commentID', (req, res) => {
    let commentID = req.params.commentID
    let deleteCommentQurey = `DELETE FROM Comments WHERE id = ${commentID}`
    dataBase.query(deleteCommentQurey, (error, result) => {
        if (error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


commentRouter.put("/:commentID", (req, res) => {
    let commentID = req.params.commentID;
    let editCommentQuery = `UPDATE Comments SET body="${req.body.body}" WHERE id = ${commentID}`;

    dataBase.query(editCommentQuery, (err, result) => {
        if (err) {
            res.send(JSON.stringify(null));
        } else {
            res.send(JSON.stringify(result));
        }
    });
});


commentRouter.put("/aceept/:commentID",(req,res) => {
    let commentID = req.params.commentID
    let acceptCommentQurey = `UPDATE Comments SET isAccept = 1 WHERE id = ${commentID}`
    dataBase.query(acceptCommentQurey,(error,result) => {
        if(error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

commentRouter.put("/reject/:commentID",(req,res) => {
    let commentID = req.params.commentID
    let acceptCommentQurey = `UPDATE Comments SET isAccept = 0 WHERE id = ${commentID}`
    dataBase.query(acceptCommentQurey,(error,result) => {
        if(error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

commentRouter.post('/new-comment', (req, res) => {
    let body = req.body
    let addNewCommentQurey = ''
    dataBase.query(addNewCommentQurey, (error, result) => {
        if (error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(result))
        }
    })
})


module.exports = commentRouter