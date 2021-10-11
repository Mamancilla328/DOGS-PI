// import React, { useEffect } from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import { getTemperaments,createDog } from '../Redux/Actions.js'


// function Form() {
//     const dispatch = useDispatch()
//     const {temperament} = useSelector(state => state)
//     const [formulario,setFormulario] = React.useState({
//         name:"", 
//         status:"",
//         gender:"", 
//         image:"", 
//         location:"", 
//         episode:0
//     })
//     useEffect(()=>{
//         dispatch(getTemperaments())
//     },[dispatch])

//     const onSubmit = (e)=>{
//         e.preventDefault()
//         dispatch(createDog(formulario))
//         setFormulario({
//             name:"", 
//             status:"",
//             gender:"", 
//             image:"", 
//             location:"", 
//             episode:0
//         })
//     }

//     const handleOnChange = (e)=>{
//         setFormulario({
//             ...formulario,
//             [e.target.name]: e.target.value
//         })
//     }
//     const handleOnChangeEspecial = (e)=>{
//         if(formulario.episode.includes(e.target.value)){
//            let newEpisdoes = formulario.episode.filter(ep => ep !== e.target.value)
//             setFormulario({
//                 ...formulario,
//                episode: newEpisdoes
//             })
//         }else{
//             setFormulario({
//                 ...formulario,
//                 episode: [...formulario.episode, e.target.value]
//             })
//         }
//     }
//     return (
//         <form onSubmit={onSubmit}>
//             <label >Name</label>
//             <input value={formulario.name} onChange={handleOnChange} name="name" type="text" />
//             <label >Status</label>
//             <input value={formulario.status} onChange={handleOnChange} name="status" type="text" />
//             <label >Genre</label>
//             <input value={formulario.gender} onChange={handleOnChange} name="gender" type="text" />
//             <label >Location</label>
//             <input value={formulario.location} onChange={handleOnChange} name="location" type="text" />
//             <label >image</label>
//             <input value={formulario.image} onChange={handleOnChange} name="image" type="text" />
//             <select onChange={handleOnChange} name="temperament"  >
//             {
//                 temperament.length > 0 &&
//                 temperament.map(e =>(
//                     <option key={e.id} value={e.id}>{e.name}</option>
//                 ))
//             }
//             </select>
            
//             <input type="submit" value="Create"/>
//             {/* {
//                 formulario?.episode.length > 0 &&
//                 formulario.episode.map(e =>(
//                     <label>{e}</label>
//                 ))
//             } */}
//         </form>
//     )
// }

// export default Form