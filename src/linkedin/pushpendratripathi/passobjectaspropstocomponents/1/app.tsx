import * as React from 'react';
import User from './user';


const user = {
    id:1,
    email:'nitesh.khatri88@gmail.com',
    age:33,
    isMarried:false,
    skills:['React','Angular','Typescript','Javascript'],
    handleClick:() => {
        console.log(`Hello ${user.email}`)
    }
}

export default function CustomApp() {
  return (
    <div>
        <User id={user.id} email={user.email} age={user.age} isMarried={user.isMarried} skills={user.skills} clickMe={user.handleClick}/>
    </div>
  )
}
