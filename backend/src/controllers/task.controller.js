const express = require("express");
const Task=require("../models/task.model")
const router=express.Router()

const crudController = require("./crud.controller");

router.get("/", async (req, res) => {
    //console.log("d",req.params)
    const { page = 1, pageSize = 3 } = req.query;
    let offset = (page - 1) * pageSize;
    let tasks = await Task.find().skip(offset).limit(pageSize);
    let totalPages = Math.ceil((await Task.find().countDocuments()) / pageSize)
    res.status(200).json({ tasks:tasks, curPage:page })
} );

router.post("/", crudController(Task).post)

// router.get("/:id", crudController(Task).getOne)

router.get("/:id", async (req, res) => {
    
    let tasks = await Task.find({
        subtasks: req.params.id
    })
   
    res.status(200).json(tasks)
})

router.patch("/:id", crudController(Task).updateOne);
router.delete("/:id", crudController(Task).deleteOne);

module.exports = router;