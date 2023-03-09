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

module.exports = {
    getHomePage, getDetailPage
}