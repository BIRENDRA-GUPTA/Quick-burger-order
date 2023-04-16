function auth(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    return next()
}

module.exports = auth