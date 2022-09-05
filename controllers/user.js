const Study = require('../models/User')

module.exports = {
    getUser: async (req,res)=>{
        console.log(req.user)
        try{
            const studyItem = await Study.find({userId:req.user.id})
            res.render('manage-profile.ejs', { title: 'Edit Profile', studies: studyItem, isAuth: req.isAuthenticated(),
    user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    getProfile: async (req,res)=>{
        console.log(req.user)
        try{
            const studyItem = await Study.find({userId:req.user.id})
            res.render('view-profile', { title: 'View Profile', studies: studyItem, isAuth: req.isAuthenticated(), user: req.user})
        }catch(err){
            console.log(err)
        }
    }
}    