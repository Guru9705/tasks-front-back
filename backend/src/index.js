const express = require("express");
const mongoose = require("mongoose");
const taskController = require("./controllers/task.controller");
const subTaskController = require("./controllers/subtask.controller");
const cors=require("cors")
const DB_URL="mongodb+srv://gursimar:root@cluster0.eaesh.mongodb.net/tasks?retryWrites=true&w=majority"
const PORT = 8000;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/tasks", taskController);
app.use("/subtasks", subTaskController);



const connect = () => {
    mongoose.connect(DB_URL);
}



app.listen(PORT, () => {
    try {
        console.log("listen", PORT);
        connect()
    } catch(e) {
        console.log("error",e)
    }
    
})


