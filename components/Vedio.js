import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import ReactPlayer from "react-player";
import { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import {db} from "./../firebase";


function Vedio() {
  const [vedio ,setVedio ] = useState([]);
  const [firstfounder,setFirstfounder] = useState([]);
  const [secondfounder,setSecondfounder] = useState([]);
  const [thirdfounder,setThirdfounder] = useState([]);

useEffect(()=> 
 onSnapshot(
   query(collection(db,"vedio"),orderBy("timestamp","desc")),
   (snaphot) => {
     setVedio(snaphot.docs);
   }
 ),[])

 useEffect(()=> 
 onSnapshot(
   query(collection(db,"firstfounder"),orderBy("timestamp","desc")),
   (snaphot) => {
    setSecondfounder(snaphot.docs);
   }
 ),[])

 useEffect(()=> 
 onSnapshot(
   query(collection(db,"secondfounder"),orderBy("timestamp","desc")),
   (snaphot) => {
    setFirstfounder(snaphot.docs);
   }
 ),[])

 useEffect(()=> 
 onSnapshot(
   query(collection(db,"thirdfounder"),orderBy("timestamp","desc")),
   (snaphot) => {
    setThirdfounder(snaphot.docs);
   }
 ),[])





  return <div className="gap-4 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 bg-gray-100  min-h-[500px] ">
   <Carousel 
            autoPlay
            showArrows={false}
            autoFocus
            infiniteLoop
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            interval={5000} 
            >
      {firstfounder.map((post) => (
              <div  key={firstfounder.id} className="bg-transparent p-14 min-h-[600px]  justify-center text-center sm:max-h-7 ">
              <p className=" text-slate-600  tracking-[6px] mx-auto my-auto mb-5  " >PROFESSIONAL</p> 
              <p className=" font-bold  text-gray-800 w-full text-center justify-center border-white text-5xl mb-10 " > {post.data().role} </p>
          <img className="  max-w-[150px] max-h-[150px] mt-4 mb-4  rounded-3xl mx-auto" src={post.data().imgs} alt="/"                layout="fill" 
                objectFit="contain" />
          <div className="pt-6 text-center space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-gray-600">
              {post.data().caption}
              </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className=" text-black font-bold ">
            {post.data().name}
              </div>
              <div className=" uppercase  text-gray-500 ">
              {post.data().role}
              </div>
            </figcaption>
            </div>
           
          </div>


      ))}
       {secondfounder.map((post) => (
             <div key={secondfounder.id} className="bg-transparent p-14 min-h-[600px]  justify-center text-center sm:max-h-7 ">
             <p className=" text-slate-600  tracking-[6px] mx-auto my-auto mb-5  " >PROFESSIONAL</p> 
             <p className=" font-bold  text-gray-800 w-full text-center justify-center border-white text-5xl mb-10 " > {post.data().role} </p>
         <img                layout="fill" 
                objectFit="contain" className="  max-w-[150px] max-h-[150px] mt-4 mb-4  rounded-3xl mx-auto" src={post.data().imgs} alt="/"  />
         <div className="pt-6 text-center space-y-4">
           <blockquote>
             <p className="text-lg font-medium text-gray-600">
             {post.data().caption}
             </p>
             
           </blockquote>
           <figcaption className="font-medium">
           <div className=" text-black font-bold ">
           {post.data().name}
             </div>
             <div className=" uppercase  text-gray-500 ">
             {post.data().role}
             </div>
           </figcaption>
           </div>
          
         </div>
      ))}
       {thirdfounder.map((post) => (
              <div key={thirdfounder.id} className="bg-transparent p-14 min-h-[600px]  justify-center text-center sm:max-h-7 ">
              <p className=" text-slate-600  tracking-[6px] mx-auto my-auto mb-5  " >PROFESSIONAL</p> 
              <p className=" font-bold  text-gray-800 w-full text-center justify-center border-white text-5xl mb-10 " > {post.data().role} </p>
          <img                layout="fill" 
                objectFit="contain" className="  max-w-[150px] max-h-[150px] mt-4 mb-4  rounded-3xl mx-auto" src={post.data().imgs} alt="/"  />
          <div className="pt-6 text-center space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-gray-600">
              {post.data().caption}
              </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className=" text-black font-bold ">
            {post.data().name}
              </div>
              <div className=" uppercase  text-gray-500 ">
              {post.data().role}
              </div>
            </figcaption>
            </div>
           
          </div>


      ))}
  </Carousel>   
  
      <div className=" hidden xl:inline-flex bg-slate-900 mt-auto mb-auto" >
      {vedio.map((post) => (
         <div key={vedio.id}>
           <ReactPlayer  controls width='650px' height='400px'  url={post.data().imgs} />
         </div>
          
          ))
        }
      </div>

  </div>
}

export default Vedio;
