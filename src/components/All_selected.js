import React from 'react';
import "./All_Selected.css"
import { useLocation } from 'react-router-dom';
const All_selected = () => {
    const state = useLocation();
    console.log(state)
  return (
    <div className='All page'>
        <h2 className=''>
            Picked Player
        </h2>
        <div className='container'>
            {

            }
        </div>
    </div>
  )
}

export default All_selected