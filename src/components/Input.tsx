import React from "react"

interface Type {
   id:number,
   value:number,
   updateInput(id:number,value:number):void
}

const Input = (props:Type) => {
   //get value and update state in parent
   const handleChange = (e:any) =>{
      let value:number = e.target.value;

      //update for corresponding prop input
      props.updateInput(props.id,value)
   }

   return (
      <div className="Input">
         <label htmlFor={"input-"+props.id} >Input {props.id}</label> : 
         <input type="number" id={"input-"+props.id}  name={"input-"+props.id} value={props.value} onChange={handleChange} /> 
      </div>
   )
}

export default Input