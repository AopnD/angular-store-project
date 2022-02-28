module.exports.onlyAdmin = (req, res, next) =>{
    if(req.session.user?.role == "admin"){
        next()
    }else{
        res.status(401).send({err: true, msg:"Please log in as admin"})
    }
}