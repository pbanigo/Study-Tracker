const Todo = require('../models/User')

module.exports = {
    getUser: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            res.render('manage-profile.ejs', { title: 'Edit Profile', todos: todoItems, isAuth: req.isAuthenticated(),
    user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    getProfile: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            res.render('view-profile', { title: 'View Profile', todos: todoItems, isAuth: req.isAuthenticated(), user: req.user})
        }catch(err){
            console.log(err)
        }
    }
}    