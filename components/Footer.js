
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import {db} from "./../firebase";

function Footer() {
    const router = useRouter()

    const [notice, setNoice] = useState([]);
    useEffect(()=> 
     onSnapshot(
       query(collection(db,"notice"),orderBy("timestamp","desc")),
       (snaphot) => {
        setNoice(snaphot.docs);
       }
     ),[]);

    const [basic ,setBasic ] = useState([]);
    useEffect(()=> 
     onSnapshot(
       query(collection(db,"basicinfo"),orderBy("timestamp","desc")),
       (snaphot) => {
        setBasic(snaphot.docs);
       }
     ),[]);
    
    return (
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-20  md:px-32 px-10 py-14 bg-gray-100 text-grey-600  justify-center ml-auto mr-auto  ">
            <div className=" space-y-4 w-32 text-xs font-semibold text-gray-800  ">
            {basic.map((post) => (   

            <div key={basic.id}>
                <img className=" sm:max-w-md  cursor-pointer h-16 " onClick={() => router.push("/") }
                src={post.data().images}
                layout="fill" 
                objectFit="contain" 
                objectPosition="left"
            />
            <p className='mt-7 ml-[-20px]'>{post.data().schoolmoto}</p>            
            </div>

            ))}
            
            </div>
            <div className=" cursor-pointer space-y-4 text-xs text-gray-800 w-32  ">
                <h5 className=" font-bold text-base ">NOTICE</h5>
                {notice.map((post) => (
                    <div key={notice.id}>
                        <p>{post.data().notice}</p>
                    </div>
                    

                )) }
                   
            </div>

            <div className=" cursor-pointer w-32 space-y-4 text-xs text-gray-800  ">
                <h5 className=" font-bold text-base "> Study Program </h5>
                    <p>Bsc.</p>
                    <p>B.A</p>
                    <p>Class 10</p>
                    <p>Class 9</p>
            </div>
            <div className=" cursor-pointer w-32 space-y-4 text-xs  text-gray-800  ">
                <h5 className=" font-bold text-base ">Pages</h5>
                    <div onClick={() => router.push("/Gallery") } >Gallery</div>
                    <div>
                    <Link  href='https://www.instagram.com/sr.group.of.education' ><a>Instagram Page</a></Link>
                    </div>
                    
                    <div><Link  href='https://www.facebook.com/banspar.gajpur.3' ><a>Facebook Page</a></Link> </div>
                    <div onClick={() => router.push("/Dashbord") } >Dashbord</div>

            </div>
            
         
        </div>
    )
}

export default Footer
