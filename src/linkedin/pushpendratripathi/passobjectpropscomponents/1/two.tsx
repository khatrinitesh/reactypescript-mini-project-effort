import React from 'react';

interface IProps{
    apiData:{
        name:string;
        age:number
    }[]
}


const Two = (props:IProps)=> {
    console.log(props.apiData)
  return (
    <div style={{backgroundColor:'yellow'}}>
        <h1>two component</h1>
        {
            props.apiData.map((user) => {
                return(
                    <>{user.name} - {user.age}</>
                )
            })
        }
    </div>
  )
}

export default Two;