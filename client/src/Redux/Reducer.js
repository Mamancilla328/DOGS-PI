import {
    GET_ALL_DOGS,
    GET_ALL_TEMPERAMENTS,
    SET_NAME,
    SET_ORDER,
    SET_PAGE,
    GET_DOG,
    REMOVE_DOG,
    FILTER_STATUS,
    }from './Actions.js'
    
    const initialState ={
        dogs:[],
        dog:{},
        temperaments:[],
        name:"",
        order:"",
        page:1
    }
    
    export default function reducer (state = initialState, {type, payload}){
    
        switch (type) {
           
            case GET_ALL_DOGS:
                return {
                   ...state,
                    dogs: payload
                }
            case SET_NAME:
                return{
                    ...state,
                    name: payload
                }
            case SET_PAGE:
                return{
                    ...state,
                    page: payload
                }
            case SET_ORDER:
                return{
                    ...state,
                    order: payload
                }
            case GET_DOG:
                return{
                    ...state,
                    dog: payload
                }
            case REMOVE_DOG:
                return{
                    ...state,
                    dog:payload
                }
            case GET_ALL_TEMPERAMENTS:
                return{
                    ...state,
                    temperaments: payload
                }
            case FILTER_STATUS:
                const newDog = state.dogs.result.filter(c =>{
                    return c.status === payload
                })
                return{
                    ...state,
                    characters:{
                        ...state.dogs,
                        result:newDog
                    } 
                }
            default:
                return state
        }
    
    }