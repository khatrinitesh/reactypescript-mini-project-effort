
export default function CustomApp() {
  return (
    <div>
        <Proj name='nitesh'/>
    </div>
  )
}


interface IProps {
    name:any;
}
const Proj = ({name}:IProps) => {
    return(
        <div>
            {name}
        </div>
    )
}