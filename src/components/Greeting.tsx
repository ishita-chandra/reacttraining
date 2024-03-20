import {useState} from "react"

type GreetingProps= {name:string,age:number}
function Greeting(props:GreetingProps){
    let [cname,setCName]=useState<string>(props.name)
    let location="mumbai"
    function handleClick(){
        setCName("Ishi")
    }
    return(
        <>

        <h2 className="greeting_text"> Hi {cname} from greeting {props.age} working at {location}</h2>
        <button onClick={handleClick}>Click to change name</button>
        </>
        )


}
export default Greeting