import React,{ useEffect,useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';

function Post() {
    const [gallery,setGallery] = useState([]);
    const postImages = (post) => {
        const post_images = post.images?.map(file => (
            <div >
                <img className=" rounded-lg object-cover " src={file} alt="/S.R Internation School Gallery" />

            </div>
        ))

        return post_images
    }

    useEffect(() => {
        const collectionRef = collection(db,"gallery");
        const q = query(collectionRef,orderBy("timestamp","desc"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setGallery(querySnapshot.docs.map(doc => ({...doc.data(),id:doc.id, timestamp: doc.data().timestamp?.toDate().getTime()})))

        });
        return unsubscribe
    },[])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-8 xl:pl-10 xl:pr-10 w-screen ' >{
        gallery.map(post => (
            <div key={gallery.id}>
                
                    <div>
                       {postImages(post)} 
                    </div>
            </div>
        ))
        }</div>
  )
}

export default Post