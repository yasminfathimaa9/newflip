import React from 'react'

 function Images2(props) {
    return (
        <div>
            <img style={{width:"150px" ,height:"150px",margin:"20px",padding:"15px"}} src={props.src}/>
            <b>  <p>{props.name}</p></b>
            <i> <p  style={{color:"darkgreen"}}>{props.id}</p> </i>
        </div>
    )
}
export default Images2