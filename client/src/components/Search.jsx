import "./Search.css"
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getDogs, setName, setPage,statusFilter } from '../Redux/Actions.js'
import { IoIosSearch } from "react-icons/io";

const SearchInput = styled.input`

`
function Search() {
    const [input, setInput] = React.useState("")

    const dispatch = useDispatch()

    const handleOnChange = (e)=>{
        e.preventDefault()
        setInput(e.target.value)
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        dispatch(setName(input))
        dispatch(getDogs({page:1, name:input})) 
        dispatch(setPage(1))
        setInput("")
    }
    const filterVivo = ()=>{
        dispatch(statusFilter("unknown"))
    }
    return (
        <form onSubmit={onSubmit} className="form">
            <SearchInput type="text" placeholder="Search..." onChange={handleOnChange} value={input} className="Search"/>
            <button type="submit" className="lupa" ><IoIosSearch/></button>
            {/* <button type="button" onClick={filterVivo} >Filter</button> */}
        </form>
    )
}

export default Search