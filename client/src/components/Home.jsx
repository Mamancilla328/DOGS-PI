import "./Home.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getDogs} from "../Redux/Actions.js";
import Card from "./Card.jsx"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const Home = () => {
    const dispatch = useDispatch()
    const {dogs} = useSelector(state=> state)
    const [page,setPage] = useState(1)
    
    useEffect(()=>{
       dispatch(getDogs({})) 
    },[dispatch])

    const changePage = (page)=>{
        dispatch(getDogs({page}))
        setPage(page)
    }
    
    return (
        <div className='general'>
            <div className='buttsBox'>

            {
                dogs?.result?.length>0 && dogs.result.map((e)=>{
                    return <Card image={e.image} name={e.name} id={e.id} temperament={e.temperament}/>
                })
            }
            </div>

            <div className='butts'>
                <button className='buttons' disabled={page -1 === 0} onClick={()=> {changePage(page -1)}}><IoIosArrowBack/></button>
                    <label>{page}</label>
                <button className='buttons' disabled={dogs?.count <= (page * 5)} onClick={()=>{changePage(page +1)}}><IoIosArrowForward/></button>
            </div>
            
        </div>
    )
}

export default Home