const mongoose = require('mongoose')

var Schema = mongoose.Schema
var todoSchema = new Schema({
    title: String,
    isDone: Boolean
})

var Todos = mongoose.model("Todos", todoSchema)

const find = async function(query){
    return await Todos.find(query)
}
const findByID = async function(id){
    return await Todos.findById(id)
}
const findByTitle = async function(title){
    return await Todos.findOne({title: title})
}
const findByState = async function(isDone){
    return await Todos.find({isDone: isDone})
}
const create = async function(data){
    const newTodo = new Todos(data)
    return await newTodo.save()
}
const update = async function(id, data){
    return await Todos.findOneAndUpdate(id, data, {new: true})
}
const deleteOne = async function(id){
    return await Todos.findByIdAndDelete(id)
}
module.exports = {
    find: find,
    findByID: findByID,
    findByTitle: findByTitle,
    findByState: findByState,
    create: create,
    update: update,
    deleteOne: deleteOne
}

// module.exports = Todos