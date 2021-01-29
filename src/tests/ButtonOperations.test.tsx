import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import ButtonOperations from '../components/ButtonOperations';

describe("Button Component Test Suite",()=>{
   test('Renders button component with all four buttons', () => {
      //rendered
      const performOperation = jest.fn((type)=>{})
      render(<ButtonOperations performOperation={performOperation}/>);
   
      //get four buttons
      const addButton = screen.getByText(/Add/i);
      const subtractButton = screen.getByText(/Subtract/i);
      const multiplyButton = screen.getByText(/Multiply/i);
      const divideButton = screen.getByText(/Divide/i);
   
      expect(addButton).toBeInTheDocument();
      expect(subtractButton).toBeInTheDocument();
      expect(multiplyButton).toBeInTheDocument();
      expect(divideButton).toBeInTheDocument();
   });

   test ("Expect add button to trigger performOperation with add",()=>{
      //rendered
      const performOperation = jest.fn((type)=>{})
      render(<ButtonOperations performOperation={performOperation}/>);
   
      //get add button      
      const addButton = screen.getByText(/Add/i);
   
      //click add button
      userEvent.click(addButton)  
      
      //expect performOperation props to be called with add
      expect(performOperation).toBeCalledWith("add");
   }) 

   test ("Expect subtract button to trigger performOperation with subtract",()=>{
      //rendered
      const performOperation = jest.fn((type)=>{})
      render(<ButtonOperations performOperation={performOperation}/>);
   
      //get subtract button      
      const subtractButton = screen.getByText(/Subtract/i);
   
      //click subtract button
      userEvent.click(subtractButton)  
      
      //expect performOperation props to be called with subtract
      expect(performOperation).toBeCalledWith("subtract");
   }) 

   test ("Expect multiply button to trigger performOperation with multiply",()=>{
      //rendered
      const performOperation = jest.fn((type)=>{})
      render(<ButtonOperations performOperation={performOperation}/>);
   
      //get multiply button      
      const multiplyButton = screen.getByText(/Multiply/i);
   
      //click multiply button
      userEvent.click(multiplyButton)  
      
      //expect performOperation props to be called with multiply
      expect(performOperation).toBeCalledWith("multiply");
   }) 

   test ("Expect divide button to trigger performOperation with divide",()=>{
      //rendered
      const performOperation = jest.fn((type)=>{})
      render(<ButtonOperations performOperation={performOperation}/>);
   
      //get divide button      
      const divideButton = screen.getByText(/Divide/i);
   
      //click divide button
      userEvent.click(divideButton)  
      
      //expect performOperation props to be called with divide
      expect(performOperation).toBeCalledWith("divide");
   }) 
})