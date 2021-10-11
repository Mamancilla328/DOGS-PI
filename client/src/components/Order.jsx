import "./Order.css"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogs,setOrder } from '../Redux/Actions'



function Order() {
    const { name, page } = useSelector(state=> state)
    const dispatch = useDispatch()

    const handleSelect = (e)=>{
       dispatch(setOrder(e.target.value))
        dispatch(getDogs({name, page, order:e.target.value}))
    }

    return (
        <div className= "ordergral">
            <select onChange={handleSelect} className="order"> 
                  
                <option selected value="asc">asc</option>
                <option value="desc">desc</option>
                
            </select>
        </div>
    )
}

export default Order