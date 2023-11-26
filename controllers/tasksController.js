const  Tasks=require("../models/tasksModel");
const User=require("../models/userModel");
const asyncHandler=require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler");

//CREATE task

const addTasks= asyncHandler(async(req,res,next)=>{
   
    const {title}=req.body;


    if(!title){
        return next(new ErrorHandler("All Fields are manditory!",400));
    }

    const task=await Tasks.create({
      title,
      dateAssigned:Date.now(),
      description: req.description,
      user_id:req.user.id,
    });

    await task.save();
    
    res.status(201).json({
    success:true,
    task
  });

});


//get a single task
const getTask=asyncHandler(async(req,res)=>{

  const task=await Tasks.findById(req.params.id);
 
  if(!task){
    return next(new ErrorHandler("Task not found!",404));
   }

  res.status(200).json({
      success:true,
      task
  });

});


//GET_ALL_tasks
const getTasks=asyncHandler(async(req,res)=>{

    const tasks=await Tasks.find({user_id:req.user.id});
    res.status(200).json({
        success:true,
        tasks
    });

});


//EDIT A task
const updateTasks=asyncHandler(async(req,res,next)=>{

      let task=await Tasks.findById(req.params.id);
      if(!task){
       return next(new ErrorHandler("Task not found!",404));
      }

      if(task.user_id.toString()!==req.user.id){
        return next(new ErrorHandler("User dont have permission to update other users lists",403));
      }
      
      const updatedTask=await Tasks.findByIdAndUpdate(req.params.id, req.body, {new:true});
      if(updatedTask.status=="completed") updatedTask.completedDate=Date.now();
      await updatedTask.save();
      res.status(200).json({ 
        success:true,
        updatedTask
      });

});

//DELETE_A task
const deleteTasks=asyncHandler(async(req,res,next)=>{

    let task=await Tasks.findById(req.params.id);
      if(!task){
       return next(new ErrorHandler("Book not found!",404));
      }


      if(task.user_id.toString()!==req.user.id){
        return next(new ErrorHandler("User dont have permission to delete other users lists",403));
      }
      
     await Tasks.deleteOne({_id:req.params.id});
     res.status(200).json({
      success:true,
      task
    });

});

//analysis

const analysis=asyncHandler(async(req,res,next)=>{
  const tasks=await Tasks.find({user_id:req.user.id});
  let totalTime=0,count=0,taskIn7=0;
  var CompletionTimeForEachTask=[];
  

  tasks.forEach((task)=>{
  
    if(task.completedDate!==null){
        let d = new Date();
        if(d.setDate(task.completedDate.getDate()+7)>=Date.now()){
          taskIn7++;      
        }
        console.log(d);
        totalTime=totalTime+task.completedDate.getTime()-task.dateAssigned.getTime();;
        count++;
        CompletionTimeForEachTask.push([task.id,(task.completedDate.getTime()-task.dateAssigned.getTime())/(1000 * 3600 * 24)]);
    }else{

    }
    
  });

  if(count===0){
    return next(new ErrorHandler("undefined infinite",403));
  }

  totalTime/=(1000 * 3600 * 24); //in days
  const avgtime=totalTime/count; //avg number of tasks =days to complete tasks/total no of tasks
  console.log(avgtime);

-
  res.status(201).json({
    Average_Time_To_Complete_1_task_in_days:avgtime,
    Completion_Time_For_Each_Task_indays:CompletionTimeForEachTask,
    Tasks_Completed_In_Last_7_days:taskIn7,
  });
 
});


module.exports={addTasks,getTasks,getTask,updateTasks,deleteTasks,analysis};