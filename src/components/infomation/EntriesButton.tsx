import React from "react";

function EntriesButton(props:{name:string,isActive?:boolean}) {
    const id = props.name.replace(" ","");
  return (
    <button
      className={`nav-link ${props.isActive?"active":""}`}
      id={`${id}-tab`}
      data-bs-toggle="tab"
      data-bs-target={`#${id}`}
      type="button"
      role="tab"
      aria-controls="home"
      aria-selected="true"
    >
      <span className="text-capitalize">{props.name}</span> 
    </button>
  );
}

export default EntriesButton;
