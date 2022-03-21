const Task=require("../models/task.model")
const getAll = (model) => async (req, res) => {
    let items = await model.find();
    res.status(200).json(items)
}

const createOne=(model)=> async (req, res) => { 
    let item = await model.create(req.body);
    res.status(201).json(item)
}

const getOne=(model)=>async (req, res) => {
    let item = await model.findById(req.params.id).populate("subtasks");
    res.status(200).json(item)
 }

const updateOne = (model) => async (req, res) => {
    if (model == Task) {
        let item = await model.findByIdAndUpdate(req.params.id,
            {
                $set: {
                    title: req.body.title,
                    status: req.body.status,
                },
                $push: {
                    subtasks: [...req.body.subtasks]
                }
            },
            { new: true }
        );
        res.status(200).json(item)
    } else {
        let item = await model.findByIdAndUpdate(req.params.id,
            {
                $set: {
                    title: req.body.title,
                    status: req.body.status,
                },
            },
            { new: true }
        );
        res.status(200).json(item)
    }
   
 };
const deleteOne=(model) =>async (req, res) => { 
    let item = await model.findByIdAndDelete(req.params.id);
    res.status(200).json(item)
};

module.exports = (model) => ({
    post: createOne(model),
    getOne: getOne(model),
    getAll: getAll(model),
    updateOne: updateOne(model),
    deleteOne:deleteOne(model)
        
})