import "./Dog.css"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getDog } from '../Redux/Actions.js'
import { IoMdArrowBack } from "react-icons/io";


function Dog(props) {

    console.log(props);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        dispatch(getDog(props.match.params.id))
    },[dispatch]);

    const goToBack = ()=>{
        history.goBack()
    };

    const myDog = useSelector(state => state.dog);
    const urlImg = "https://cdn2.thedogapi.com/images/"+(myDog.reference_image_id+".jpg")

    console.log(myDog)

    // .metric.split('-')[0];
    // const weightMax = myDog.weight.metric.split('-')[1];
    // const heightMin = myDog.height.metric.split('-')[0];
    // const heightMax = myDog.height.metric.split('-')[1];

    // console.log(weightMin)
    // console.log(weightMax)
    // console.log(heightMin)  
    // console.log(weightMax)    

    return(
       
                <div className="box">
                    <button onClick={goToBack} className="btn"><IoMdArrowBack/></button>

                    <div className="gral">
                    {
                        myDog ?
                      <div className="detail">
                          <h1>Hi, I'm {myDog.name}</h1>
                          <img src={urlImg} className="dog"/>
                          <h2>My temperament is {myDog.temperament} and I can weigh from {}lb up to {}lb.</h2>
                          <h2>I can be a wild beast grr...!<h2></h2> My height ranges from {}in to {}in and I can live as long as {myDog.life_span} </h2>
                      </div>: <p>...Loding</p>
                    }
                    </div>

                    
                </div>
       
    ) 
            

 }

export default Dog

