import React from 'react';
import { render, screen } from '@testing-library/react';
import OperationResult from '../components/OperationResult';

describe("OperationResult Component Test Suite",()=>{
   test('Renders OperationResult component', () => {
      render(<OperationResult results={10}/>);
   
      //get results
      const resultElement = screen.getByText(/Results/i);
   
      expect(resultElement).toBeInTheDocument();
   });

   test("Expect OperationResult component to show correct props results",()=>{      
      render(<OperationResult results={15}/>);
   
      //get results 15
      const resultElement = screen.getByText(/15/i);
 
      expect(resultElement).toBeInTheDocument();
   })
})