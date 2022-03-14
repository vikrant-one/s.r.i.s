import HeaderTop from "../components/HeaderTop";
import Head from 'next/head'
import Post from "./compo/Post";
import { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import {db} from "./../firebase";
import Footer from "../components/Footer";

function Gallery() {
  const [basic ,setBasic ] = useState([]);
  useEffect(()=> 
   onSnapshot(
     query(collection(db,"basicinfo"),orderBy("timestamp","desc")),
     (snaphot) => {
      setBasic(snaphot.docs);
     }
   ),[]);
  return <div className="  overflow-hidden " >
       <Head>
        <title>S.R.International School</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderTop />
      <div className=" mt-16  flex flex-col justify-center text-center  ml-auto mr-auto px-[20px] xl:px-20 " >
      <p className=" text-slate-600  tracking-[7px] " >SCHOOL GALLERY</p>
          <p className=" font-bold text-gray-800 w-full text-center justify-center  text-4xl xl:text-[45px] pb-4 pt-6   y-4  border-white " > Welcome To Our Campus </p>
          {basic.map((post) => (
            
            <p key={basic.id} className="text-slate-900 py-4  max-w-[700px] text-center justify-center ml-auto mr-auto mb-10  ">{post.data().gallerytext}</p>
               
          
          ))} 

      </div>
      <div >
        <Post  />
      </div>
      <Footer  />

  </div>;
}

export default Gallery;
