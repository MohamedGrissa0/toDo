import React , {useState} from "react";





function Todoelement(props)
{

    return <li id={props.id} key={props.key} onClick={() => {props.oncheck(props.id)}} >{props.text}</li>
}


export default Todoelement