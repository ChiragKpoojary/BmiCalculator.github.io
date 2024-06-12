import React, { useState } from 'react';
import './index.css';

function App() {
    const[weight,setweight]= useState("");
    const[height,setheight]= useState("");
    const[bmi,setbmi]= useState(null);
    const [imageSrc, setImageSrc] = useState("");
    const[fat,setfat]= useState("");
  function Calculatebmi(e){
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setbmi(calculatedBmi);
     
      if (calculatedBmi < 18.50) {
        setImageSrc('th (3).jpeg'); 
        setfat("Skinny"); 
      } else if (calculatedBmi <= 24.99) {
        setImageSrc('th.jpeg'); 
        setfat('fit'); 
      } else if (calculatedBmi <= 29.99) {
        setImageSrc('th (1).jpeg'); 
        setfat('overweight'); 
      } else {
        setImageSrc('th (2).jpeg'); 
        setfat('obease'); 
      }
    
}
}

 return( 
    <div>
     <div className=' bg-green-600 h-screen'>
     <div className=' flex flex-col justify-center items-center '>
      <h1 className='text-6xl font-bold text-white mt-6'>
        BMI Calculator
      </h1>
      </div>
      <div className=' flex flex-col justify-center items-center'>
      <form className='bg-gray-200 p-6 rounded-lg shadow-xl w-96 mt-20 ' >
        <div className='flex flex-col items-center'>
          <input
            className='mt-5 border-2 border-slate-500 p-2 rounded-xl w-full'
            type='text'
            placeholder='Weight in kg'
            value={weight}
            onChange={(e)=>setweight(e.target.value)}
           
          />
          <input
            className='mt-5 border-2 border-slate-500 p-2 rounded-xl w-full'
            type='text'
            placeholder='Height in cm'
        value={height}
        onChange={(e)=>setheight(e.target.value)}
          />
          <button
            type='submit'
            className='mt-5 bg-green-500 text-white p-2 rounded-xl w-full'
            onClick={Calculatebmi}
          >
            Calculate BMI
            </button>
            {bmi && (
              <div>
              <h1 className={`pt-5 text-3xl ${bmi < 18.5 ? 'text-blue-500' : bmi <= 24.9 ? 'text-green-500' : bmi <= 29.9 ? 'text-orange-500' : 'text-red-500'}`}>
                  Your are {fat}
                </h1>
                <h1 className={`pt-1 pl-3 text-2xl ${bmi < 18.5 ? 'text-blue-500' : bmi <= 24.9 ? 'text-green-500' : bmi <= 29.9 ? 'text-orange-500' : 'text-red-500'}`}>
                  Your BMI is {bmi}
                </h1>
               
             
               
                  <img src={imageSrc} alt="BMI category"  className="mt-5 pl-3" />

                

            
              </div>
            )}

        </div>
        
        
      </form>
      </div>
            </div>
        </div>
   
 );
}
export default App;

