const express=require("express");
const router=express.Router();
const {addTasks,getTasks,updateTasks,deleteTasks,getTask,analysis}=require("../controllers/tasksController");
const {isAuthenticatedUser}=require("../middleware/auth");

router.route("/get-tasks").get(isAuthenticatedUser,getTasks);
router.route("/get-analysis").get(isAuthenticatedUser,analysis);
router.route("/get-task/:id").get(isAuthenticatedUser,getTask);
router.route("/add-tasks").post(isAuthenticatedUser,addTasks);
router.route("/delete-tasks/:id").delete(isAuthenticatedUser,deleteTasks);
router.route("/update-tasks/:id").put(isAuthenticatedUser,updateTasks);


module.exports=router;