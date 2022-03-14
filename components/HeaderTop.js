import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import {db} from "./../firebase";
import { PhoneIncomingIcon ,MailIcon, LocationMarkerIcon  }  from "@heroicons/react/outline"

function HeaderTop() {
    const router = useRouter()

    const [basic ,setBasic ] = useState([]);


    useEffect(()=> 
     onSnapshot(
       query(collection(db,"basicinfo"),orderBy("timestamp","desc")),
       (snaphot) => {
        setBasic(snaphot.docs);
       }
     ),[db])

    return (
        <>
        {basic.map((post) => (        
<header key={basic.id}  className="top-0 grid   bg-white py-6 px-5 md:px-15 z-50 sticky shadow-md  ">
<div className=" relative items-center h-8  cursor-pointer my-auto flex  ">
<img onClick={() => router.push("/") } className=" sm:max-w-md  items-center   mt-7  h-16 ml-6 "
    src={post.data().images}
    layout="fill" 
    objectFit="contain"
    objectPosition="left"
/>
</div>
<div className="flex items-center mt-[-30px] justify-end text-gray-500 space-x-5">
    <PhoneIncomingIcon className="   h-8 cursor-pointer text-purple-500 " />
    <div className=" flex-col  " >
        <p className="  font-semibold   " > CALL US </p>
        <p>{post.data().contactnumber}</p>
    </div>
    <MailIcon className=" hidden lg:inline  h-7 cursor-pointer text-purple-500 " />
    <div className=" hidden lg:inline  flex-col " >
        <p className=" font-semibold " >E-MAIL</p>
        <p>{post.data().email}</p>
    </div>
    <LocationMarkerIcon className="hidden lg:inline   h-7 cursor-pointer text-purple-500 " />
    <div className=" hidden lg:inline  flex-col mr-10 " >
        <p className="  font-semibold " >LOCATION</p>
        <p>{post.data().address}</p>
    </div>

</div>
       
</header>
))}
</>

    )
}

export default HeaderTop
