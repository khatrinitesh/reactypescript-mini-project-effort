import React from 'react';

const array = [
    {
      name: "Tim",
      age: 27
    },
    {
      name: "Bob",
      age: 32
    }
  ];

export default function CustomApp(){
    const list:any=[]

    array.forEach((item,index) => {
        list.push(
            <div key={index}>
                <div>Name: {item.name}</div>
                <div>Age: {item.age}</div>
            </div>
        )
    })

    return(
    <>
     {list}
    </>
    );
}
