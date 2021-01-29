import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe("App component test suit",()=>{
   test('Renders App component with header', () => {
      render(<App />);
      const headerElement = screen.getByText(/perform operations on input/i);
      expect(headerElement).toBeInTheDocument();
   });
    
   test("Add two numbers",()=>{
      render(<App />);
   
      //get input element
      const inputElement1:any = screen.getByLabelText(/input 1/i);
      const inputElement2:any = screen.getByLabelText(/input 2/i);
   
      //change input values
      fireEvent.change(inputElement1, {target: {value: "15"}})  
      fireEvent.change(inputElement2, {target: {value: "10"}})  

      //get add button      
      const addButton = screen.getByText(/Add/i);

      //click add button
      userEvent.click(addButton)  

      //expect results to be 25      
      const resultsElement = screen.getByText(/: 25/i)

      //expect results 25 to be present     
      expect(resultsElement).toBeInTheDocument();
   })

   test("Subtract two numbers",()=>{
      render(<App />);
   
      //get input element
      const inputElement1:any = screen.getByLabelText(/input 1/i);
      const inputElement2:any = screen.getByLabelText(/input 2/i);
   
      //change input values
      fireEvent.change(inputElement1, {target: {value: "15"}})  
      fireEvent.change(inputElement2, {target: {value: "10"}})  

      //get subtract button      
      const subtractButton = screen.getByText(/Subtract/i);

      //click add button
      userEvent.click(subtractButton)  

      //expect results to be 5      
      const resultsElement = screen.getByText(/: 5/i)

      //expect results 5 to be present     
      expect(resultsElement).toBeInTheDocument();
   })

   test("Multiply two numbers",()=>{
      render(<App />);
   
      //get input element
      const inputElement1:any = screen.getByLabelText(/input 1/i);
      const inputElement2:any = screen.getByLabelText(/input 2/i);
   
      //change input values
      fireEvent.change(inputElement1, {target: {value: "15"}})  
      fireEvent.change(inputElement2, {target: {value: "10"}})  

      //get multiply button      
      const multiplyButton = screen.getByText(/Multiply/i);

      //click add button
      userEvent.click(multiplyButton)  

      //expect results to be 150    
      const resultsElement = screen.getByText(/: 150/i)

      //expect results 150 to be present     
      expect(resultsElement).toBeInTheDocument();
   })

   test("Divide two numbers",()=>{
      render(<App />);
   
      //get input element
      const inputElement1:any = screen.getByLabelText(/input 1/i);
      const inputElement2:any = screen.getByLabelText(/input 2/i);
   
      //change input values
      fireEvent.change(inputElement1, {target: {value: "15"}})  
      fireEvent.change(inputElement2, {target: {value: "10"}})  

      //get divide button      
      const divideButton = screen.getByText(/Divide/i);

      //click add button
      userEvent.click(divideButton)  

      //expect results to be 1.5      
      const resultsElement = screen.getByText(/: 1.5/i)

      //expect results 1.5 to be present     
      expect(resultsElement).toBeInTheDocument();
   })
})
