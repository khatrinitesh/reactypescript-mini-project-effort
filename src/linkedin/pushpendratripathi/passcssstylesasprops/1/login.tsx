import React from 'react';

interface IProps {
    style:{
        color:string;
        size:string | number;
        backgroundColor:string;
    }
}

export default function Login(props:IProps) {
    console.log(props.style.color);

  return (
    <div>
        <h1 style={{color:props.style.color,fontSize:props.style.size,background:props.style.backgroundColor}}>Nitesh Khatri</h1>
    </div>
  )
}
