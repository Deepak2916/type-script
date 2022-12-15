import { Router } from "express";

import { Todo } from "../models/todo";

let todos:Todo[]=[]
const router=Router();
type ReqBody={text:string};
type ReqParams={id:string}


router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todos})
})

router.post('/todo',(req,res,next)=>{
    let body=req.body as ReqBody
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:body.text
    };
    todos.push(newTodo)
    res.status(200).json({success:true,todos:todos})
})

router.put('/todo/:id',(req,res,next)=>{
    let params=req.params as ReqParams
    let todoIndex=todos.findIndex(index=>index.id===params.id)

    if(todoIndex>=0){
        todos[todoIndex]={
            id:todos[todoIndex].id,
            text:req.body.text
        }
        return res.status(200).json({success:true,todos:todos})
    }
})

router.delete('/todo/:id',(req,res,next)=>{
    let params=req.params as ReqParams
    todos=todos.filter(todo=>todo.id!==params.id)
    res.status(200).json({success:true,todo:todos})
})



export default router;