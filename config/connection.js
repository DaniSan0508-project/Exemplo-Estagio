import mysql from 'mysql';

const connect = mysql.createConnection({
    host:'localhost',
    port:3307,
    user:'root',
    password:'admin',
    database:'usuarios'
});

export default connect;

