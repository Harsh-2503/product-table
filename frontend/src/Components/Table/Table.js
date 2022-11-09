import React from 'react'
import './Table.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

export default function Table(props) {

  const[data,setData] = useState([])
  // setData(props.response)

  return (
    <div className={props.blur?'base-container':'base-container'+" "+'blur-background'}>
    <div className="flex-container">
      <div className='head'>
        <p className='header'>No.</p>
        <p className='header'>Name</p>
        <p className='header'>Price</p>
        <p className='header'>Quantity</p>
        <p className='header'>Edit</p>
        <p className='header'>Delete</p>
        </div>
        {/* <div className='content'>
        <p className='data'>hello</p>
        <p className='data'>hello</p>
        <p className='data'>hello</p>
        <p className='data'>hello</p>
        <p className='data' onClick={props.add}><AddIcon></AddIcon> </p>
        <p className='data'><RemoveIcon></RemoveIcon></p>       
        </div>   */}
        {Array.isArray(props.response)?props.response.map((arr,index)=>(
          <div className="content" key={index} >
        <p className='data'>{index+1}</p>     
        <p className='data'>{arr['name']}</p>    
        <p className='data'>{arr['prize']}</p>
        <p className='data'>{arr['quantity']}</p>
        <p className='data' name={arr['_id']['$oid']} onClick={props.add}><AddIcon ></AddIcon> </p>
        <p className='data' name={arr['_id']['$oid']}  onClick={props.remove}><RemoveIcon></RemoveIcon></p>    
            </div>
          )):<></>}
        {/* {data.map()} */}
        {/* <div className="content">
        <p className='data'>hello</p>     
        <p className='data'>hello</p>    
        <p className='data'>hello</p>
        <p className='data'></p>
        <p className='data'><AddIcon ></AddIcon> </p>
        <p className='data'><RemoveIcon></RemoveIcon></p>    
        </div> */}
        </div>

    </div>
  )
}
