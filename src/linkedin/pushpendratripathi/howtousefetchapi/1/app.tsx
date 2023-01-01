import { useState,useEffect } from "react";

interface obj {
    id:number;
    title:string;
    url:string;
    thumbnailUrl:string;
}

export default function CustomApp(args:any) {

    const [data,setData] = useState<obj[]>([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => res.json())
        .then((data) => setData(data));
    },[])



  return (
    <div>
        {data.map((data,index) => {
            if(data.id > 11){
                return(
                    <>
                     <div {...args} key={index} m={10}>
                        <h1>Product {data.id}</h1>
                        <img src={data.thumbnailUrl}/>
                        <p>{data.title}</p>
                     </div>
                    </>
                )
            }
        })}
    </div>
  )
}
