import db from "../configs/connectDB"

let getHomePage = (req, res) => {
    // xu li logic o day
    let data = []
    const query = 'select * from users'
    db.query(query, (err, result) => {
        if(err) {console.log(err)}
        result.map((row) => {
            data.push({
                id: row.id,
                email: row.email,
                address: row.address,
                firstName: row.firstName,
                lastName: row.lastName
            })
        })
        console.log(data)
        return res.render('index.ejs', {dataUser : JSON.stringify(data)})
    })
}

module.exports = {
    getHomePage
}