const express=require("express")
require("./db/mongoose")
// const User=require("./models/user")
// const Task=require("./models/tasks")
const userRouter=require("./routers/user")
const taskRouter=require("./routers/task")

const app=express()
const port=process.env.PORT 


app.use(express.json())                     //will automaticaly parse incoming json 
                                            // to an object,so we can access it in our request
app.use(userRouter) 
app.use(taskRouter)   

//without middleware:new request->run route handler
//with middlewarw: new request->do something->run route handler

app.listen(port,()=>{
    console.log("Server up on port: "+port)
})


//middlerware
// app.use((req,res,next)=>{
//     if(req.method==="GET"){
//         res.send("GET request are disabled")
//     }else{
//         next()
//     }
    
// })
// app.use((req,res,next)=>{
//     res.status(503).send("site is currently down,check back soon")
// })


// const multer=require("multer")
// const upload=multer({
//     dest:"images",
//     limits:{
//         fileSize:1000000
//     },
//     fileFilter(req,file,cb){

//         // if(!file.originalname.endsWith(".pdf"))
//         if(!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error("Please upload a word document"))

//         }
//         cb(undefined,true)
//         // cb(new Error("File must be a PDF"))
//         // cb(undefined,true)
//         // cb(undefined,false)
//     }
// })
// const errorMidddleware=(req,res,next)=>{
//     throw new Error("From my middleware")
// }
// app.post("/upload",upload.single("upload"),(req,res)=>{
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send({
//         error:error.message
//     })
// })

// const Task=require("./models/tasks")
// const User=require("./models/user")
// const  main=async ()=>{
//     // const task=await Task.findById("62b845ceb4186731a0252495")
//     // await task.populate("owner").execPopulate()
//     // console.log(task.owner)
// const user=await User.findById("62b99a7cd6900930dce432a3")
// await user.populate("tasks").execPopulate()
// console.log(user.tasks)
// }
// main()


// const pet={
//     name:"Hal"
// }
// pet.toJSON=function(){
    
//     return {}
// }
// console.log(JSON.stringify(pet))

// const bcrypt=require("bcryptjs")
// const jwt=require("jsonwebtoken")
// const myFunction=async()=>{
// const token=jwt.sign({_id:"abc123"},"thisismynewcourse",{expiresIn:"7 days"})
// console.log(token)
// const data=jwt.verify(token,"thisismynewcourse")
// console.log(data)






//     const password="Red12345"
//     const hashedPassword=await bcrypt.hash(password,8)
//     console.log(password)
//     console.log(hashedPassword)
//     const isMatch=await bcrypt.compare("Red12345",hashedPassword)
//     console.log(isMatch)
// 
// }
// myFunction()
