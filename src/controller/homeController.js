let getHomePage = (req, res) => {
    // xu li logic o day
    return res.render('index.ejs')
}

module.exports = {
    getHomePage
}