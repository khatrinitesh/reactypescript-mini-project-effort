import React from 'react'
import BtnCounter from './btncounter';

export default function CustomApp() {

    const name: string = "Hello React Button";

    const onChildClicked= (e:number) => {
        console.warn('callback from parent triggered',e)
    }
  return (
    <div>
        <BtnCounter name={name} onClicked={e => onChildClicked(e)}/>
    </div>
  )
}
