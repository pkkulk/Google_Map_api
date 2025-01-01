import { useState,useEffect } from 'react'
import Map from './pagess/Map'
import Pop from './pagess/pop'




function App() {
  const [location, setlocation] = useState(0)
  const[showPopup,setshowPopup] =useState(false)

 useEffect(()=>{
  const timer = setTimeout(()=> {setshowPopup(true);}, 4000);
   return() => clearTimeout(timer);
   },[])

   function closePopup(){
    setshowPopup(false);
   }
   function loc(latitude,longitude)
   {
    setlocation({lat:latitude,long:longitude})
   }

  return (
    <>
     <div>
     {showPopup && <Pop closePopup={closePopup} loc={loc}/> }
      <h1 className='text-red-600 text-2xl'>Google Maps in React</h1>
  
      <Map change={location} />
    </div>
    
       </>
  )
}

export default App
