import React,{useState} from 'react'

export default function CustomApp() {

    const [text,setText]  = useState('')

    const skills = [
        {
            label:"ReactJS",selected:true
        },
        {
            label:"Javascript",selected:true
        },
        {
            label:"Typescript",selected:true
        },
    ]
  return (
    <>

        <input type='text' placeholder='' value={text} onChange={(e:any) => {setText(e.target.value)}}/>

        {skills.filter((skill) => skill.label.toLocaleLowerCase().includes(text)).map((skill) => {
            return(
                <div>
                    {skill.label}
                </div>
            )
        })}
    </>
  )
}
