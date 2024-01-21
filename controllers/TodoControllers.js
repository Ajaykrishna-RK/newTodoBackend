const Todo = require("../model/TodoModel");

const postTodos = async (req, res) => {
  try {
    const { todo } = req.body;
    const newTodo = new Todo({ todo: todo });
    await newTodo.save();
    return res.status(201).json({ newTodo });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(201).json({ todos });
  } catch (err) {
    return res.status(500).json(err);
  }
};


const getTodoById = async (req,res)=>{
    try{
        const {id} = req.params
        const getTodoById = await Todo.findById(id);
        return res.status(201).json(getTodoById);
    }catch(err){
        return res.status(500).json(err);
    }
}


const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { todo } = req.body;
    await Todo.findByIdAndUpdate(id, {
      todo,
    });
    const updatedTodo = await Todo.findById(id);

    return res.status(201).json({ updatedTodo });
  } catch (err) {
    res.status(500).json(err);
  }

};

const deleteTodo = async(req,res)=>{
    try{
const {id} = req.params
const deleteTodo =  await Todo.findByIdAndDelete(id)
return res.status(201).json({ deleteTodo });
    }catch(err){

    }
}


module.exports = { getTodos, postTodos, updateTodo,getTodoById,deleteTodo };
