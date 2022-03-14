

import React,{ useEffect,useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';

function ThirdBannerPost() {
    const [thirdbanner,setthirdBanner] = useState([]);
    const postImages = (post) => {
        const post_images = post.images?.map(file => (
            <div key={thirdbanner.id}>
                <img className="md:max-h-[600px]  md:rounded-lg" src={file} alt="/S.R Internation School thirdbanner" />

            </div>
        ))

        return post_images
    }

    useEffect(() => {
        const collectionRef = collection(db,"thirdbanner");
        const q = query(collectionRef,orderBy("timestamp","desc"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setthirdBanner(querySnapshot.docs.map(doc => ({...doc.data(),id:doc.id, timestamp: doc.data().timestamp?.toDate().getTime()})))

        });
        return unsubscribe
    },[])
  return (
    <div className='py-[10px] md:max-h-[500px]  md:my-[10px]  xl:rounded-md md:p-[20px] sm:pt-5' >{
        thirdbanner.map(post => (
            <div key={thirdbanner.id}>
                
                    <div >
                       {postImages(post)} 
                    </div>
            </div>
        ))
        }</div>
  )
}

export default ThirdBannerPost