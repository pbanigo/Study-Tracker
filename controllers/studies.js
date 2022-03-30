const Study = require('../models/Study')

module.exports = {
    getStudies: async (req,res)=>{
        console.log(req.user)
        try{
            const studyItems = await Study.find({userId:req.user.id}).sort({dueDate: 1})
            const itemsLeft = await Study.countDocuments({userId:req.user.id,completed: false})
            const itemsCompleted = await Study.countDocuments({userId:req.user.id,completed: true})
            res.render('studies.ejs', {title: 'Your Progress', isAuth: req.isAuthenticated(), studies: studyItems, left: itemsLeft, finished: itemsCompleted, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createStudy: async (req, res)=>{
        try{
            await Study.create({studyItem: req.body.studyItem, textArea: req.body.textArea, dueDate: req.body.dueDate, completed: false, userId: req.user.id})
            console.log('Study item has been added!')
            res.redirect('/studies')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Study.findOneAndUpdate({_id:req.body.studyIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Study.findOneAndUpdate({_id:req.body.studyIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteStudy: async (req, res)=>{
        console.log(req.body.studyIdFromJSFile)
        try{
            await Study.findOneAndDelete({_id:req.body.studyIdFromJSFile})
            console.log('Deleted study')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    editStudy: async (req, res) => {
        let studyId = sessionStorage.getItem("StudyId")
        try {
            Study = await Study.findOneAndUpdate({_id:studyId})
            console.log(studyId)
        } catch (err) {
            console.log(err)
        }
    },
}    