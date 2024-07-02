import React, { useEffect, useState } from "react"

const TrafficLight =()=>{

    const [selected, setSelected] = useState("green")
    const [active, setActive] = useState(false)
    
    useEffect(()=>{
        if(active){
            const interval = setInterval(()=>{
                if(selected == "red"){
                    setSelected("yellow")
                }else if(selected == "yellow"){
                    setSelected("green")
                }else if (selected == "green"){
                    setSelected("red")
                }
            }, 1000)
            return()=>clearInterval(interval)
        }
    },[active, selected])

    return(
        <main>
            <div className="p-box"></div>
            <div className="box-light">

                <div className={`red ${selected == "red" ? "light-on":" "}`} onClick={() => setSelected("red")}></div>
                <div className={`yellow ${selected == "yellow" ? "light-on":" "}`} onClick={() => setSelected("yellow")}></div>
                <div className={`green ${selected == "green" ? "light-on":" "}`} onClick={() => setSelected("green")}></div>
               
            </div>
            <button className="btn btn-secondary" onClick={(()=>setActive(!active))} >Activar</button>
        </main>
    )
}

export default TrafficLight