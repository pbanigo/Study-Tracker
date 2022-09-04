module.exports = {
    getIndex: (req,res)=>{
        res.render('index', {title: 'Home Page', isAuth: req.isAuthenticated(),
    user: req.user})
    }
}