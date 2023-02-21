import { useRef } from "react";
import { useState, useEffect } from "react";
export const Dolar =()=> {
        const [dolar,setDolar] = useState([])
        useEffect(()=>{
fetch(`https://criptoya.com/api/dolar`)
.then(response =>response.json())
.then(({blue, oficial, solidario, mep}) => {
     console.log(blue, oficial, solidario, mep)
     const esqueleto =
     <>
     <p> Dolar Blue: ${blue}</p>
     <p> Dolar Oficial: ${oficial}</p>
     <p> Dolar Solidario: ${solidario}</p>
     <p> Dolar Mep: ${mep}</p>
     
     </>
    setDolar(esqueleto)
})
.catch(error => console.error(error))
        },[])
return (
<div>
{dolar}
</div>


)

    


}