const mysql = require('mysql')

const dataBase = mysql.createConnection({
    host: 'localhost',
    password: '',
    user: 'root',
    database : 'learn-shop',
})


dataBase.connect((error) => {
    if(error){
        console.log('You Have Error To Conect Dtat Base', error);
    } else {
        console.log('You Conect To The Data Base Successfully');
    }
})

module.exports = dataBase