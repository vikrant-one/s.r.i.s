
import React, {useCallback , useState,useRef,useMemo } from 'react'
import {useDropzone} from 'react-dropzone';
import { db, storage } from '../firebase';
import { addDoc,arrayUnion,collection,doc,serverTimestamp, updateDoc } from 'firebase/firestore';
import { ref,getDownloadURL, uploadBytes } from 'firebase/storage';

function Join() {

    const [selectedImage, setSelectedImage ] = useState([])
    const captionRef = useRef(null);
    const titleRef = useRef(null);
    const dateRef = useRef(null);
    const baseStyle = {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      borderWidth: 2,
      borderRadius: 2,
      borderColor: '#eeeeee',
      borderStyle: 'dashed',
      backgroundColor: '#fafafa',
      color: '#bdbdbd',
      outline: 'none',
      transition: 'border .24s ease-in-out'
    };
    
    const focusedStyle = {
      borderColor: '#2196f3'
    };
    
    const acceptStyle = {
      borderColor: '#00e676'
    };
    
    const rejectStyle = {
      borderColor: '#ff1744'
    };

    const uploadPost = async () => {
      const docRef = await addDoc(collection(db,"newlyjoin"),{
        className:captionRef.current.value,
        whatapp_number:dateRef.current.value,
        name:titleRef.current.value,
        timestamp:serverTimestamp()
      })
      await Promise.all(
        selectedImage.map(image => {
          const imageRef = ref(storage, `newlyjoin/${docRef.id}/${image.path}`);

          uploadBytes(imageRef,image,"data_url").then(async()=>{
            const downloadURL = await getDownloadURL(imageRef)
            await updateDoc(doc(db,"newlyjoin",docRef.id),{
              images:arrayUnion(downloadURL)
              
            })
          })
        })
      )

      captionRef.current.value="";
      dateRef.current.value="";
      titleRef.current.value="";
      setSelectedImage([])
    }
    const onDrop = useCallback(acceptedFiles => {
        setSelectedImage(acceptedFiles.map(file => 
            Object.assign(file,{
                preview:URL.createObjectURL(file)
            })
            ))
      }, [])
      const {getRootProps, getInputProps,isFocused,isDragAccept,isDragReject} = useDropzone({onDrop})
        const style = useMemo(() => ({
          ...baseStyle,
          ...(isFocused ? focusedStyle : {}),
          ...(isDragAccept ? acceptStyle : {}),
          ...(isDragReject ? rejectStyle : {})
        }), [
          isFocused,
          isDragAccept,
          isDragReject
        ]);


  return <div  classNameName=" mt-[-100px] mb-[-100px]  xl:mt-10  xl:mb-8   overflow-hidden ">
      <div className="flex xl:ml-20   items-center justify-center min-h-screen">
    <div className="w-full px-6 py-16  xl:w-2/5 ">
        <h2 className="mb-12 text-4xl antialiased text-center font-bold  text-gray-800">Join Us Today</h2>
        <form className="mx-8   space-y-12 ">
            <div>
                <input type="text" ref={titleRef}
                    className="w-full p-2 text-sm border-b-2  outline-none opacity-90 text-gray-900 focus:text-purple-900"
                    placeholder="Full Name" />
            </div>
            <div>
                <input type=" text" ref={captionRef}
                    className="w-full p-2 text-sm border-b-2  outline-none opacity-90 text-gray-900 focus:text-purple-900"
                    placeholder="Your class" />
            </div>
            <div>
                <input type="number" ref={dateRef}
                    className="w-full p-2 text-sm border-b-2  outline-none opacity-90 text-gray-900  focus:text-purple-900"
                    placeholder="Your WhatApp Number" />
            </div>


            <button  onClick={uploadPost} className="block   px-10 py-4 w-screen xl:max-w-[150px] font-bold my-3 hover:shadow-xl shadow-md rounded-full active:scale-90 transition duration-150 text-white bg-purple-500 "> SUBMIT </button>
          
        </form>
        
    </div>
    
          <img className="ml-40 hidden xl:flex  h-[400px] w-[600px]  object-cover" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/20/2018/06/For-Better1.png" alt="/" />
      
</div>    

  </div>;
}

export default Join;
