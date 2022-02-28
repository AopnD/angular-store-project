module.exports.onlyUsers = (req, res, next) => {
    if(req.session.user?.role == "user"){
        next()
    }else{
        res.status(401).send({err: true, msg:"Please log in as user"})
    }
}