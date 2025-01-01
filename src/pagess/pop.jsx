
import i from '../assets/images.png';
function Pop({closePopup,loc}){
  const enableLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);
          alert(`Location enabled! Latitude: ${latitude}, Longitude: ${longitude}`);
          // You can now update the map or send the coordinates to your backend
          loc(latitude,longitude);
          closePopup();
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Failed to get location. Please check your permissions.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
    return(<>
  <div className="fixed h-96 space-y-3 inset-0 top-28 z-50 flex flex-col justify-centershadow-2xl w-72 mx-auto bg-slate-100 rounded-lg">
 <div className='bg-white flex justify-center p-2 border-4 border-slate-200 rounded-lg'><img src={i} className='h-48'/></div>
  
    <h1 className="font-bold text-xl mx-auto ">Location permission is off</h1>
    <div className='px-4  flex flex-col justify-center space-y-2 '>
    <button onClick={enableLocation}  className='bg-blue-400  border-white border-2 border-solid rounded-full py-3 hover:bg-blue-700 hover:-translate-y-1'>Enable Location</button>
    <button className='bg-blue-400 border-solid rounded-full py-3 hover:bg-blue-700 hover:-translate-y-1 border-white border-2' >search your location manually</button>
    </div>
  </div></>
    );
}
export default Pop