import React from 'react'
import './Style.css'

const Data = (props) => {
    console.log(props.name)
    let month=props.date.toLocaleString('en-US',{month:'long'})
    let year=props.date.getFullYear();
    let day=props.date.toLocaleString('en-US',{day:'2-digit'})
  return (
    <div>
            <div className='box1'>
                <h1>Month:{month}</h1>
                <h1>Year:{year}</h1>
                <h1>Day:{day}</h1>
                <h1>Name:{props.name}</h1>
                <h1>Course:{props.course}</h1>
                <h1>Fees:{props.fees}</h1>
                <h1>Email:{props.email}</h1>
            </div>
    </div>
    )
}

export default Data