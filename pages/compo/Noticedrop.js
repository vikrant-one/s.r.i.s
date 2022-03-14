import React, {useState,useRef,useMemo } from 'react'
import { db, storage } from '../../firebase';
import { addDoc,arrayUnion,collection,doc,serverTimestamp, updateDoc } from 'firebase/firestore';
import { ref,getDownloadURL, uploadBytes } from 'firebase/storage';


const Noticedrop = () => {

    const [selectedImage, setSelectedImage ] = useState([])
    const captionRef = useRef(null);

    const uploadPost = async () => {
      const docRef = await addDoc(collection(db,"notice"),{
        notice:captionRef.current.value,
        timestamp:serverTimestamp()
      })
      await Promise.all(
        selectedImage.map(image => {
          const imageRef = ref(storage, `notice/${docRef.id}/${image.path}`);

          uploadBytes(imageRef,image,"data_url").then(async()=>{
            const downloadURL = await getDownloadURL(imageRef)
            await updateDoc(doc(db,"notice",docRef.id),{
              images:arrayUnion(downloadURL)
              
            })
          })
        })
      )

      captionRef.current.value=""
      setSelectedImage([])
    }

    
      return (
        <div className='flex-col relative '>
          <div className="mt-10  mb-14 flex flex-col justify-center text-center xl:max-w-[900px]  ml-auto mr-auto px-[20px] xl:px-20 " >
          <p className=" text-slate-600  tracking-[8px]  " >NOTICE  SECTION</p>
          <p className=" font-bold text-gray-800 w-full text-center justify-center   text-4xl xl:text-[45px] pb-4 pt-6   y-4  border-white " > Have a New Notice  </p>
        </div>
        <textarea ref={captionRef} type="text" className=' m-2 bg-white bg-opacity-25 placeholder-black font-bold p-4  w-full  h-[200px] border-dotted border-2 border-sky-500  '  placeholder='Add A New Notice Here ' />
        <button className="block ml-auto mr-auto    justify-center  text-center xl:w-[300px] px-10 py-4 w-full  font-bold my-3 hover:shadow-xl shadow-md   rounded-md active:scale-90 transition duration-150 text-white bg-purple-500"  onClick={uploadPost}>Post Notice</button>
        </div>
  )
}

export default Noticedrop