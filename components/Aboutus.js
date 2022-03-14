import { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import {db} from "./../firebase";


function Aboutus() {
  const [basic ,setBasic ] = useState([]);
  useEffect(()=> 
   onSnapshot(
     query(collection(db,"basicinfo"),orderBy("timestamp","desc")),
     (snaphot) => {
      setBasic(snaphot.docs);
     }
   ),[]);
    return (
        <div className="mt-20 xl:mt-32 mb-14 flex flex-col justify-center text-center xl:max-w-[900px]  ml-auto mr-auto px-[20px] xl:px-20 " >
          <p className=" text-slate-600  tracking-[8px]  " >INTRODUCTION</p>
          <p className=" font-bold text-gray-800 w-full text-center justify-center   text-4xl xl:text-[45px] pb-4 pt-6   y-4  border-white " > Welcome To Our Campus </p>
          {basic.map((post) => ( 
            <div key={basic.id}>
              <p className="text-slate-900 py-4 ">{post.data().aboutustext}</p>
            </div>  
          
          ))}
        </div>
    )
}

export default Aboutus

