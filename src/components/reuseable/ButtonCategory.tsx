import React from 'react'

function ButtonCategory(props:{
    name:string,
    color:"primary"|"secondary"|"warning"|"success"|"info"|"error"|"",
    onClick:Function
}) {
  return (
    <button className={`btn btn-${props.color} btn-lg text-center d-flex flex-column justify-content-center align-items-center w-100 pb-0 pt-3 button-category`} 
    onClick={()=>{props.onClick()}}>
    {/* <p><i className="fa-solid fa-circle"></i></p> */}
    <p className="ms-2 text-button-category-1 text-capitalize ">{props.name}</p>
  </button>
  )
}

export default ButtonCategory