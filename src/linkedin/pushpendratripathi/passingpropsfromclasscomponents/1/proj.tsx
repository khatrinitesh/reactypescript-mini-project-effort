
interface IProps {
    className:any;
}

export default function Proj({className}:IProps) {

    console.log(className);
  return (
    <div>
        <h1 className={className}>Nitesh Khatri</h1>
    </div>
  )
}
