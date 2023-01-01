
interface Props{
    name:string;
    age:number;
}

export default function Home({name,age}:Props) {
  return (
    <div>
        <h2>Name: {name}</h2>
        <p>Name: {age}</p>
    </div>
  )
}
