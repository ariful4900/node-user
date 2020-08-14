

module.exports.head = (req, res, next) => {

    console.log(req.headers);
    next();
}
module.exports.root = (req, res, next) => {
    return res.json({ message: "User has comes this page" })
};
module.exports.login = (req, res, next) => {
    return res.json({ message: "User Login successful" })
}
module.exports.body = (req, res, next)=>{
    console.log(req.body)
    next()
}
module.exports.logout =(req, res, next)=>{
    return res.json({message:"User Leave This page"})
}