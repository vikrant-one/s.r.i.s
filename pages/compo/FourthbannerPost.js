import React,{ useEffect,useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';

function FourthbannerPost() {
    const [fourthbanner,setfourthBanner] = useState([]);
    const postImages = (post) => {
        const post_images = post.images?.map(file => (
            <div key={fourthbanner.id}>
                <img className="md:max-h-[600px]  md:rounded-lg" src={file} alt="/S.R Internation School fourthbanner" />

            </div>
        ))

        return post_images
    }

    useEffect(() => {
        const collectionRef = collection(db,"fourthbanner");
        const q = query(collectionRef,orderBy("timestamp","desc"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setfourthBanner(querySnapshot.docs.map(doc => ({...doc.data(),id:doc.id, timestamp: doc.data().timestamp?.toDate().getTime()})))

        });
        return unsubscribe
    },[])
  return (
    <div className='py-[10px] md:max-h-[500px]  md:my-[10px]  xl:rounded-md md:p-[20px] sm:pt-5' >{
        fourthbanner.map(post => (
            <div key={fourthbanner.id}>
                
                    <div >
                       {postImages(post)} 
                    </div>
            </div>
        ))
        }</div>
  )
}

export default FourthbannerPost