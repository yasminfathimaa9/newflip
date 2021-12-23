import React from 'react'

function Carousel1(props) {
    return (
        <div className='carousel'>
            <>
                <img style={{width:"150px",height:"150px", margin:"10px"}} src={props.src} />
                <p style={{fontWeight:"bold"}}>{props.name}</p>
                <i> <p style={{color:"darkgreen"}}>{props.color}</p></i>
                <p style={{color:"gray"}}>{props.id}</p>
                </>
        </div>
    )
}

export default Carousel1