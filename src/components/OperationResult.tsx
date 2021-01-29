import React from "react"

interface Type{
   results:number
}

const ShowResults = (props:Type)=>{
   return (
      <div>
         <strong>Results</strong> : <span>{props.results}</span>
      </div>   
    )
}

export default ShowResults;