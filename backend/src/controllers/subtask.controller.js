const express = require("express");
const SubTask=require("../models/subtask.model")
const router=express.Router()

const crudController = require("./crud.controller");

router.get("/", crudController(SubTask).getAll);

router.post("/", crudController(SubTask).post)

router.get("/:id", crudController(SubTask).getOne)

router.patch("/:id", crudController(SubTask).updateOne);
router.delete("/:id", crudController(SubTask).deleteOne);

module.exports = router;