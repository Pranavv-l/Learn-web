import { useEffect, useState } from "react"

function Timer(){
    const [chat, setChat] = useState(false)
    const [time, setTime] = useState(0)
    useEffect(() => {
        let id;
        if(chat){
            id = setInterval(()=>{
                setTime(prev => prev + 1)
             },1000)
        }
        return () => {
            clearInterval(id)
            console.log("Stopped")
        }
    },[chat])
    
    return(
        <>
        <h1> Timer </h1>
        <p>{time}</p>
        <button onClick={()=>setChat(!chat)}>Enter chat</button>
        </>
    )
}
export default Timer