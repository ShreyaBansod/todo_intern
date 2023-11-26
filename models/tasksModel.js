const mongoose=require("mongoose");
const  tasksSchema=new mongoose.Schema({

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
   
    title:{
        type:String,
        maxLength:[15,"Please enter the title upto  15 characters"],
        required:true,
    },

    dateAssigned:{
        type:Date,
        required:true,
    },

    completedDate:{
        type:Date,
        default:null,
    },

    status:{
        type:String,
        required:true,
        default:"pending",
    },

    description:{
        type:String,
        maxLength:[45,"Please enter the description upto 45 characters only"],
        default:"No description",
        required:false,
    },

  
},{
    timestamps:true
})

module.exports=mongoose.model("Tasks",tasksSchema);