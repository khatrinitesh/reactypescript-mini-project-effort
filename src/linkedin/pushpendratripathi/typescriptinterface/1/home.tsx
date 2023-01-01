
interface UserProps{
    userName:{
        customerName:string;
    }
}

export default function Home(props:UserProps) {

    const {customerName}= props.userName;

  return (
    <div>
        <h1>{customerName}</h1>
    </div>
  )
}
