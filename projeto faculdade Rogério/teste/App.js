import e from 'express'
import React, {UserState, useState} from 'react'

function App(){
    const[qrlink, setQrlink] = useState()
    const[QRCode, setQrCode] = useState()
    
    async function handleQrlink(link){
         
    }
 
 
    //console.log(qrlink)
     return(
         <div className= 'container'>
               <h1>Gerador de QRCode</h1>
          <div className='generator-container'> 
             <input type='url' placeholder='www.seulink.com/'
             value={qrlink}
             onChange={e => setQrlink(e.target.value)}
             />
             <button onClick= ''>Gerar QRCode</button>
         </div>
         <div className='image-container'>
             <img src='' className='imh'/>
         </div>
 
     )
 
}