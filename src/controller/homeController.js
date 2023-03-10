import db from "../configs/connectDB"

let getHomePage = async (req, res) => {
    const [rows, fields] = await db.execute('select * from users');
    return res.render('index.ejs', {dataUser : rows})
}

let getDetailPage = async (req, res) => {
    let userid = req.params.userId
    //console.log(req.params)
    const getUserById = await db.execute(`select * from users where id = ${userid}`)
    return res.send(JSON.stringify(getUserById[0]))
    //return res.send('hello')
}

let createNewUser = async (req, res) => {
    let {firstName, lastName, email, address} = req.body
    await db.execute(`insert into users(firstName, lastName, email, address) 
                        values (?, ?, ?, ?)`, [firstName, lastName, email, address])
    return res.send('success')
}

module.exports = {
    getHomePage, getDetailPage, createNewUser
}