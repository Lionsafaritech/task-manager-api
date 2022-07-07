const mongoose=require("mongoose")
// const valid=require("validator")
mongoose.connect(process.env.MONGODB_URL,
{
    // userNewUrlParser:true,
    useNewUrlParser:true,
    // useCreateIndex:true
    useUnifiedTopology: true ,
    useCreateIndex:true ,
    useFindAndModify:false
})
// const Task=mongoose.model("Task",{
//     description:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     completed:{
//         type:Boolean,
//         default:false

//     }
// })






// const User=mongoose.model("user",{
//     name:{
//         type: String,
//         require:true
//     },
//     email:{
//         type:String,
//         require:true,
//         validate(value){
//             if(!valid.isEmail(value)){
//                 throw new Error("Email is invalid")
//             }
//         }
//     }
// })
// const me=new User({
//     name:"Narendra",
//     email:"nrsingh3@gmail.com"
// })
// me.save().then(result=>{
//     console.log(result)
// }).catch(error=>{
//     console.log(error)
// })

// const Task=mongoose.model("Task",{
//     description:{
//         type: String
//     },
//     completed:{
//         type:Boolean
//     }
// })
// const tsk=new Task({
//     description:"learn the mongoose library",
//     completed:false
// })
// tsk.save().then(task=>{
//     console.log(task)
// }).catch(error=>{
//     console.log(error)

// })
//output
// {
//     _id: 62aeec547775ba206cf56d1a,
//     description: 'learn the mongoose library',
//     completed: false,
//     __v: 0}
// const User=mongoose.model("User",{
//     name:{
//         type:String
//     },
//     age:{
//         type:Number
//     }
// })
// const me=new User({
//     name:"Narendra",age:24
// })
// me.save().then(me=>{
//     console.log(me)
// }).catch(error=>{
//     console.log(error)
// })


//output
//{ _id: 62aeea53d2b5032bb82ae54f, name: 'Narendra', age: 24, __v: 0 }