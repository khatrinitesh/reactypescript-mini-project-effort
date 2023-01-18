import * as React from 'react';


interface UserProps {
    id:number;
    email:string;
    age?:number;
    skills?:string[];
    isMarried:boolean;
    clickMe:React.MouseEventHandler;
}

const User = ({id,email,age,skills,isMarried,clickMe}:UserProps)=>{
    return(
        <>
        <p>ID: {id}</p>
        <p>Email: {email}</p>
        {age && <p>Age: {age}</p>}
        {isMarried && <p>Is Married: {isMarried}</p>}
        {skills && (
            <ul>
                {skills.map((skill) => {
                    return(
                        <li key={skill}>{skill}</li>
                    )
                })}
            </ul>
        )}
        <button onClick={clickMe} style={{padding:'15px'}}>Click</button>
        </>
    )
}

export default User;