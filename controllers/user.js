const Todo = require('../models/User')

module.exports = {
    getUser: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            res.render('manage-profile.ejs', {todos: todoItems, user: req.user})
        }catch(err){
            console.log(err)
        }
    }
}    