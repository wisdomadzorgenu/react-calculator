import React from "react"

interface Type{
   performOperation(type:string):void
}

const ShowResults = (props:Type)=>{
   return (
      <div>
         <button onClick={(e)=>{props.performOperation("add")}}> Add </button>
         <button onClick={(e)=>{props.performOperation("subtract")}}> Subtract </button>
         <button onClick={(e)=>{props.performOperation("multiply")}}> Multiply </button>
         <button onClick={(e)=>{props.performOperation("divide")}}> Divide </button>
      </div>   
    )
}

export default ShowResults;