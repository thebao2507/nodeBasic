import db from "../configs/connectDB"

let getHomePage = (req, res) => {
    // xu li logic o day
    let data = []
    const query = 'select * from users'
    db.query(query, (error, result) => {
        if(error) {console.log(error)}
        result.map((row) => {
            data.push({
                id: row.id,
                email: row.email,
                address: row.address,
                firstName: row.firstName,
                lastName: row.lastName
            })
        })
        //console.log(data)
        return res.render('index.ejs', {dataUser : data})
    })
}

module.exports = {
    getHomePage
}