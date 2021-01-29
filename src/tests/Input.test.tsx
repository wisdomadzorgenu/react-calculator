import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import Input from '../components/Input';

describe("Input Component Test Suite",()=>{
   test('Renders input component', () => {
      //rendered
      const updateInput = jest.fn((id,value)=>{})
      render(<Input id={1} value={0} updateInput={updateInput}/>);
   
      //get label
      const labelElement = screen.getByText(/Input 1/i);
   
      expect(labelElement).toBeInTheDocument();
   });

   test("Expect input text value to have props value",()=>{
      //rendered
      const updateInput = jest.fn((id,value)=>{})

      //input should have same value passed in props
      render(<Input id={1} value={5} updateInput={updateInput}/>);
   
      //get input element
      const inputElement:any = screen.getByLabelText(/input 1/i);
      
      expect(inputElement.value).toBe("5");
   })

   test ("Expect input element to trigger updateInput props on value change",()=>{
      //rendered
      const updateInput = jest.fn((id,value)=>{})
      render(<Input id={1} value={0} updateInput={updateInput}/>);
   
      //get input element
      const inputElement:any = screen.getByLabelText(/input 1/i);
   
      //change input value to 15
      fireEvent.change(inputElement, {target: {value: "15"}})  
      
      //expect props to be called with inputs
      expect(updateInput).toBeCalledWith(1,"15");
   }) 
})