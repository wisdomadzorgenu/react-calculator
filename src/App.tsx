import React,{useState} from 'react';
import './App.css';
import Input from "./components/Input"
import ShowResults from "./components/OperationResult"
import ButtonOperations from "./components/ButtonOperations"

function App() {
   //add as many inputs as possible and it will work(dynamic)
   const initialState:any = {
      inputs:[
         {id:1,value:""},
         {id:2,value:""}
      ],
      results:0
   }
   
   //state
   const [state,updateState] = useState(initialState)

   //update input state based on id
   const updateInput = (inputId:number,value:number)=>{
      const newState = {...state};

      //find id position in array
      const foundIndx = state.inputs.findIndex((obj:any)=> obj.id === inputId);

      //if found
      if(foundIndx !== -1){
         state.inputs[foundIndx].value = value
      }

      updateState(newState);
   }

   //perform basic operations
   const performOperation = (type:string) => {

      //operation type to perform: add, subtract, multiply divide
      const result:number = state.inputs.reduce((accumulator:any,obj:any,index:number)=>{
         //ensure only numbers are used
         let actualValue:number = (obj.value !== "") ? parseInt(obj.value) : 0
         
         //if first index, use as accumulator
         if(index === 0)
            return actualValue

         //perform operations on the rest
         if(type === "add")
            return accumulator + actualValue
         else if(type === "subtract")
            return accumulator - actualValue
         else if(type === "multiply")
            return accumulator * actualValue
         else if(type === "divide")
            return accumulator / actualValue

         return accumulator         
      },0)

      //update state
      updateState({...state,results:result})
   }

   return (
      <div className="App">
         <h1>Perform Operations on Input</h1>

         {state && state.inputs && state.inputs.map((obj:any)=>{
            return <Input key={obj.id} id={obj.id} value={obj.value} updateInput={updateInput} />            
         })}
         
         <div className="btn-section">
            <ButtonOperations performOperation={performOperation} />      
         </div>
         <div className="result-section">
            <ShowResults results={state.results}/>         
         </div>
    </div>
  );
}

export default App;
