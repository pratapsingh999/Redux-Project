import React from 'react'
import './App.css';
import {useSelector , useDispatch} from 'react-redux';
import {incNumber,decNumber,multNumber,divNumber} from './action/index'

function App() {
  const mystate = useSelector((state) => state.ChangeTheNumer);
  const myotherstate = useSelector((state) => state.mulTheNumer);


  const dispatch = useDispatch
  return (
    <>
     <div className="container"></div>
     <h1 className="container">Increment/Decrement Counter</h1>
     <h4 className="container">using React and Redux</h4>

     <div className="quantity">
      <button className='quantity_minus' title='Decrement' onClick={ () => dispatch(decNumber())}><span> - </span></button>
      <input type="text" name='quantity' className='quantity_input' value={mystate} />
      <button  className='quantity_plus' title='Increment' onClick={ () =>dispatch(incNumber())}><span> + </span></button>
     </div>


     <div className="container my-5"></div>
     <h1 className="container">multiplication/division Counter</h1>
     <h4 className="container">using React and Redux</h4>

     <div className="quantity">
      <button  className='quantity_minus' title='Decrement' onClick={ () => dispatch(multNumber())}><span> * </span></button>
      <input type="text" name='quantity' className='quantity_input' value={myotherstate} />
      <button  className='quantity_plus' title='Increment' onClick={ () =>dispatch(divNumber(5))}><span> / </span></button>
     </div>
    </>
  )
}

export default App