import React from 'react';
import One from './one';

export default function CustomApp() {

    const apiData = [
        {
            name:'nitesh',
            age:33
        }
    ]
  return (
    <div>
        <One data='Nitesh Khatri' endIcons='adsad' apiData={apiData}/>
    </div>
  )
}

