import React from 'react'

const PropsExample2=(props)=>{
    console.log(props.data)
    return (
        <div>
            <button onclick={props.data}>Click Here</button>
        </div>
    )
}
export default PropsExample2