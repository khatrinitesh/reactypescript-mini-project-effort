import React,{useState} from 'react'


interface IButtonCounterProps{
    name:string;
    onClicked?:(e:number) => void;
}


export default function BtnCounter({name,onClicked}:IButtonCounterProps) {
    const [count,setCount] = useState<number>(0);
    const handleClick= () => {
        const result = count + 1
        setCount(result);
        onClicked && onClicked(result)
    }
  return (
    <div>
        {count}
        <button onClick={() => handleClick()} className='btn btn-primary'>{name} - you clicked me {count} times</button>
    </div>
  )
}
