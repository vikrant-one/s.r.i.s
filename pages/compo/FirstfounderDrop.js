import React, {useCallback , useState,useRef,useMemo } from 'react'
import {useDropzone} from 'react-dropzone';
import { db, storage } from '../../firebase';
import { addDoc,arrayUnion,collection,doc,serverTimestamp, updateDoc } from 'firebase/firestore';
import { ref,getDownloadURL, uploadBytes } from 'firebase/storage';
import { PlusCircleIcon } from '@heroicons/react/outline';

const FirstfounderDrop = () => {
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
    const docRef = await addDoc(collection(db,"firstfounder"),{
      caption:captionRef.current.value,
      role:dateRef.current.value,
      name:titleRef.current.value,
      timestamp:serverTimestamp()
    })
    await Promise.all(
      selectedImage.map(image => {
        const imageRef = ref(storage, `firstfounder/${docRef.id}/${image.path}`);

        uploadBytes(imageRef,image,"data_url").then(async()=>{
          const downloadURL = await getDownloadURL(imageRef)
          await updateDoc(doc(db,"firstfounder",docRef.id),{
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

    const selected_images = selectedImage?.map(file => (

      <div key={file.id}>
          <img src={file.preview} style={{width: "200px"}} alt="" />
      </div>
    ))
    
      return (
        <div className=' border-dotted border-2 border-sky-500 p-2 '>
        <div {...getRootProps({style})}>
          <input className='  m-2 bg-white bg-opacity-25 placeholder-black font-bold p-4  w-full  h-[200px] border-dotted border-2 border-sky-500 ' {...getInputProps()} />
              <p>First Person Image</p> 
              <PlusCircleIcon className="   h-8 cursor-pointer text-purple-500 "  /> 
              {selected_images}
        </div>
        <div className=' flex-col space-y-4 '>
          <div>
          <input className=' m-2 bg-white bg-opacity-25 placeholder-black font-bold p-4  w-full ' ref={titleRef} type="text" placeholder='Enter Name' />
          </div>
          <div>
          <input  className=' m-2 bg-white bg-opacity-25 placeholder-black font-bold p-4  w-full ' ref={dateRef} type="text" placeholder='Enter ROLE' />
          </div>
          <div>
          <textarea className=' m-2 bg-white bg-opacity-25 placeholder-black font-bold p-4  w-full  h-[150px] ' ref={captionRef} type="text" placeholder='Enter a caption' />
          </div>

        <div>
        <button className="block ml-auto mr-auto   justify-center w-full  text-center xl:w-[200px] px-8 py-2   my-2 hover:shadow-xl shadow-md   rounded-md active:scale-90 transition duration-150 text-white bg-purple-500"  onClick={uploadPost}>ADD PROFILE</button>
        </div>
        </div>
        </div>
        
  )
}


export default FirstfounderDrop