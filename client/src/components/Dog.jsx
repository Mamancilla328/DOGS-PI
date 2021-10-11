import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getDog, removeDog } from '../Redux/Actions.js'
import { IoMdArrowBack } from "react-icons/io";


function Dog(props) {
    
    const { id } = props.match.params
    const { dog } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(()=>{
        dispatch(getDog(id))
        return()=>{
            dispatch(removeDog())
        }
    },[dispatch,id])

const goToBack = ()=>{
    history.goBack()
}

    return (
        <div>
            <button onClick={goToBack}><IoMdArrowBack/></button>
            {

                dog?.name ? 
                <>
                    <img src={dog.image}/>
                    <p>{dog.name}</p>
                </>
                :
                <div>Loding...</div>
            }
        </div>
    )
}

export default Dog
