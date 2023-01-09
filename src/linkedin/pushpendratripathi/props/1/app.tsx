import React from 'react';

export default function CustomApp() {

    const obj = {name:'nitesh',age:33,dob:'17/06/1989',mob:9920767524}
  return (
    <div>
    <Customer {...obj}/>
    </div>
  )
}

interface IProps{
    name:string;
    age:number;
    dob:string;
    mob:number;
}

function Customer({name,age,dob,mob}:IProps){
    return(
        <>
         <h2>{name}</h2>
         <p>{age}</p>
         <p>{dob}</p>
         <p>{mob}</p>
        </>
    )
}