import React from 'react';
import Two from './two';

interface IProps{
    data:string;
    endIcons:string;
    apiData:{
        name:string;
        age:number
    }[]
}


const One = (props:IProps)=> {
    const {data,endIcons} = props;
  return (
    <div>
        <h1>{data}</h1>
        <img src={endIcons} width="320px" height="320px"/>
        {
            props.apiData.map((user) => {
                return(
                    <div style={{backgroundColor:'lightblue'}}>
                        <h1>One Component</h1>
                        {user.name}
                        {user.age}
                    </div>
                )
            })
        }
        <Two apiData={props.apiData}/>
    </div>
  )
}

export default One;