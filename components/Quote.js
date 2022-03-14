import { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import {db} from "./../firebase";

function Quote() {
  const [quote ,setQuote ] = useState([]);
   
useEffect(()=> 
onSnapshot(
  query(collection(db,"quotes"),orderBy("timestamp","desc")),
  (snaphot) => {
    setQuote(snaphot.docs);
  }
),[])

   console.log(quote)

  return   <div className="mt-20  xl:mt-32 mb-20 p-10 flex flex-col justify-center text-center xl:max-w-[900px] ml-auto mr-auto " >
  <p className=" font-serif text-7xl ">''</p>
  <p className=" text-slate-600  tracking-[4px] " > THOUGHT OF THE DAY </p>
  {quote.map((post) => (
    <div key={quote.id}>  
  <p className=" font-bold  text-gray-700   text-center justify-center  text-2xl pb-4 pt-6   border-white " >{post.data().quotes} </p>
  <p className="text-slate-900 py-4  font-bold tracking-[6px] text-xl uppercase ">{post.data().author}</p>
  </div>
  ))}
</div>
}

export default Quote;
