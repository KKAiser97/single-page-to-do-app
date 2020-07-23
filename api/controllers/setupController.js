var Todos = require('../models/todoModel')
const { get } = require('mongoose')

function getTodos(res){
    Todos.find(function(err, todos){
        if(err){
            // res.send(err)
            res.status(500).json(err)
        }else{
            res.json(todos)
        }
    })
}

module.exports = function(app){

    app.get('/api/todos', function(req, res){
        getTodos(res)
    })

    app.get('/api/todo/:id', function(req, res){
        Todos.findById({_id: req.params.id}, function(err, todo){
            if(err){
                throw err
            }else{
                res.json(todo)
            }
        })
    })

    app.post('/api/todo', function(req, res){
        // var todo = {
        //     title: req.body.title,
        //     isDone: req.body.isDone
        // }
        Todos.create(req.body, function(err, todo){
            if(err){
                throw err
            }else{
                getTodos(todo)
            }
        })
    })

    app.put('/api/todo', function(req, res){
        if(!req.body.id){
            return res.status(500).send('ID is required!')
        }else{
            Todos.update({
                _id: req.body.id, 
            }, {
                title: req.body.title,
                isDone: req.body.isDone
            }, function(err, todo){
                if(err){
                    throw err
                }else{
                    getTodos(todo)
                }
            })
        }
    })

    app.delete('/api/todo/:id', function(req, res){
        if(req.body.id){
            Todos.deleteOne({_id: req.body.id},
            function(err, todo){
                if(err){
                    throw err
                }else{
                    getTodos(todo)
                }
            })
        }
    })
}