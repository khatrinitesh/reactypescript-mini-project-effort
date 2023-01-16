import React from 'react';
import Login from './login';

export default function CustomApp() {

    const styleCode = {
        color:'red',
        size:'50px',
        backgroundColor:'yellow'
    }
  return (
    <div>
        <Login style={styleCode}/>
    </div>
  )
}
