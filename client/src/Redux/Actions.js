import axios from 'axios'
export const GET_ALL_DOGS = "GET_ALL_DOGS"
export const GET_ALL_TEMPERAMENTS = "GET_ALL_TEMPERAMENTS"
export const SET_NAME = "SET_NAME"
export const SET_ORDER = "SET_ORDER"
export const SET_PAGE = "SET_PAGE"
export const GET_DOG = "GET_DOG"
export const CREATE_DOG = "CREATE_DOG"
export const REMOVE_DOG = "REMOVE_DOG"
export const FILTER_STATUS = "FILTER_STATUS"



export const createDog= (breed)=> {
    return (dispatch)=>{
        axios.post(`http://localhost:3001/breeds/add`, breed)
        .then(response =>{
            return dispatch({
                type: CREATE_DOG
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const getTemperaments = ()=> {
    return (dispatch)=>{
        axios.get(`http://localhost:3001/temperaments`)
        .then(temperaments =>{
            return dispatch({
                type: GET_ALL_TEMPERAMENTS,
                payload: temperaments.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const getDog = (id)=>{
    return async (dispatch)=>{
        try {
            const result = await axios.get(`http://localhost:3001/breeds/${id}`)
            return dispatch({
                type: GET_DOG,
                payload: result.data
            })

        } catch (error) {
            console.log(error)
        }
    }
}
export const getDogs = ({page, order, name})=>{
    return (dispatch)=>{
        axios.get(`http://localhost:3001/breeds?page=${page?page:1}&order=${order?order:""}&name=${name?name:""}`)
        .then(dogs =>{
            return dispatch({
                type: GET_ALL_DOGS,
                payload: dogs.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
export const setName = (name)=>{
    return{
        type: SET_NAME,
        payload: name
    }
}
export const setPage = (page)=>{
    return{
        type: SET_PAGE,
        payload: page
    }
}
export const setOrder = (order)=>{
    return{
        type: SET_ORDER,
        payload: order
    }
}
export const removeDog = ()=>{
    return{
        type: REMOVE_DOG,
        payload: {}
    }
}

export const statusFilter =(status)=>{
    return{
        type: FILTER_STATUS,
        payload: status
    }
}
