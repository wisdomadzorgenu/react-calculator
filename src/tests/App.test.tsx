import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe("App component test suit",()=>{
   test('Renders App component with header', () => {
      render(<App />);
      const headerElement = screen.getByText(/perform operations on input/i);
      expect(headerElement).toBeInTheDocument();
   });
    
   test("Enters input 1 with value",()=>{

   })

   test("Enteres input 2 with value",()=>{

   })

   test("Performs add operation on input",()=>{

   })

   test("Performs subtract operation on input",()=>{

   })

   test("Performs multiply operation on input",()=>{
      
   })
   
   test("Performs divide operation on input",()=>{
      
   })
})
