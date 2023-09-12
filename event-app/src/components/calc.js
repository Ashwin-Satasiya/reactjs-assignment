import React from 'react'

import abc from "../images/calc.gif";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCalculator } from '@fortawesome/free-solid-svg-icons';

import {add, sub, mul, div} from '../components/CalculatorApp';

export default function Calc() {

  return (
    
        <>
        <section id="main">

          <div className='image-calc'>
          <img src={abc} alt='calc-image'></img>
          </div>
          <div className='calc-data'>
            <h1>Calculator <FontAwesomeIcon icon={faCalculator}/></h1>
          <button className='btn' type='button' onClick={add} >Addition</button>
          <button className='btn' type='button' onClick={sub} >Substraction</button>
          <button className='btn' type='button' onClick={mul} >Multiplication</button>
          <button className='btn' type='button' onClick={div} >Division</button>

          </div>

        </section>   
        

        </>

  )
}
