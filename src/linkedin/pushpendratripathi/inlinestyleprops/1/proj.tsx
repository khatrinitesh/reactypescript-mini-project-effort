

interface IProps {
    className:any;
}

export default function Proj({className}:IProps) {
  return (
    <div>
        <h1 style={{color:className.color,fontSize:className.fontSize}}>Nitesh Khatri</h1>
    </div>
  )
}
