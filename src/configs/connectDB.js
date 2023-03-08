import mysql from 'mysql2'

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodejsbasic'
})

//const query = 'select * from users'
//db.query(query, (err, res) => {
//    if(err) {console.log(err)}
//    return console.log(res)
//})

export default db