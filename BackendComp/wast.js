import { TimelineElements } from "./TimelineElement";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { VolumeUpIcon } from '@heroicons/react/solid';
 
function TimeLine() {

  let radioIconStyle = {background: "white" }

  return <div>
    <div className="bg-transparent p-20   justify-center text-center ">    
  <p className=" text-slate-600  tracking-[6px] mx-auto my-auto mb-5  " >DON'T MISS OUT</p> 
    <p className=" font-bold  text-gray-800 w-full text-center justify-center border-white text-5xl " > Upcoming Events</p>
    </div>
  
  
  <div className=" bg-gray-100  " >

    <VerticalTimeline>
    {
      TimelineElements.map(
        el => {

          
          return(
            <VerticalTimelineElement 
            key={ el.id }
            date={el.date}
            dateClassName="  text-xs font-bold "
            thumbnail = {el.thumbnail}
            iconStyle={radioIconStyle }
            iconClassName=""
            icon={<VolumeUpIcon  className=" h-10 cursor-pointer text-purple-500 " />}  
            img={el.thumbnail}
            >
              <div className=" flex ">
                <div className=" flex-col" >
                <h1 className=" text-2xl font-bold  text-purple-500 " >{el.title} </h1>
                <p className=" text-sm font-thin  text-slate-600 " >{el.desc}</p>
                </div>
                <img src={el.thumbnail} alt="/" className="  h-36  object-contain  mt-auto  mb-auto" />
                
              </div>
              <div>
            <form>
                <h1>Sign In</h1>
                
                <input ref={emailRef} placeholder="Email Id" type="email"/>
                <input ref={passwordRef} placeholder="Password" type="Password"/>

            </form>
            <button onClick={handleSignIn} type="submit">Sign In</button>
        </div>





              



            </VerticalTimelineElement>
          )
        }
      )
    }

  
  </VerticalTimeline>
  </div>
  </div>;

}

export default TimeLine;
















export const TimelineElements = [
    {
        thumbnail: "https://www.amway.com/medias/119630D-en-US-480px-01?context=bWFzdGVyfGltYWdlc3wzODIyNnxpbWFnZS9qcGVnfGltYWdlcy9oYTAvaDdmLzg4MzgyMDE2Mzg5NDIuanBnfDFlYjE3NTkxMWI3NGUyMDI5MGExZTM4NzUwNTAwZjc3ZWRhZmYxZWU0NGMyOTRjZWE2M2Y5ZTRiNGZiNmY4YTE",
        price: "1500",
        id: "asdhgds-989",
        desc: "O alone for ultra-sheer coverage with SPF 35.this is very good product imported from germany",
        title: "Cobra",
        date: "26-Jan-2021"
        
    },
    {
        thumbnail: "https://www.amway.com/medias/119630D-en-US-480px-01?context=bWFzdGVyfGltYWdlc3wzODIyNnxpbWFnZS9qcGVnfGltYWdlcy9oYTAvaDdmLzg4MzgyMDE2Mzg5NDIuanBnfDFlYjE3NTkxMWI3NGUyMDI5MGExZTM4NzUwNTAwZjc3ZWRhZmYxZWU0NGMyOTRjZWE2M2Y5ZTRiNGZiNmY4YTE",
        price: "1500",
        id: "ds-9",
        desc: " blending or alone for ultra-sheer coverage with SPF 35.this is very good product imported from germany",
        title: "Cobra",
        date: "26-Jan-2021"
        
    },
    {
        thumbnail: "https://www.amway.com/medias/119630D-en-US-480px-01?context=bWFzdGVyfGltYWdlc3wzODIyNnxpbWFnZS9qcGVnfGltYWdlcy9oYTAvaDdmLzg4MzgyMDE2Mzg5NDIuanBnfDFlYjE3NTkxMWI3NGUyMDI5MGExZTM4NzUwNTAwZjc3ZWRhZmYxZWU0NGMyOTRjZWE2M2Y5ZTRiNGZiNmY4YTE",
        price: "1500",
        id: "asdh989",
        desc: "Our lasto-Network primes and instantly improves the look of skin’s texture.",
        title: "Cobra",
        date: "26-Jan-2021"
        
    },
    {
        thumbnail: "https://www.amway.com/medias/119630D-en-US-480px-01?context=bWFzdGVyfGltYWdlc3wzODIyNnxpbWFnZS9qcGVnfGltYWdlcy9oYTAvaDdmLzg4MzgyMDE2Mzg5NDIuanBnfDFlYjE3NTkxMWI3NGUyMDI5MGExZTM4NzUwNTAwZjc3ZWRhZmYxZWU0NGMyOTRjZWE2M2Y5ZTRiNGZiNmY4YTE",
        price: "1500",
        id: "ads-989",
        desc: "Our lasto-Network primes and instantly improves the look of skin’s texture. Use under",
        title: "Cobra",
        date: "26-Jan-2021"
        
    },
    {
        thumbnail: "https://www.amway.com/medias/119630D-en-US-480px-01?context=bWFzdGVyfGltYWdlc3wzODIyNnxpbWFnZS9qcGVnfGltYWdlcy9oYTAvaDdmLzg4MzgyMDE2Mzg5NDIuanBnfDFlYjE3NTkxMWI3NGUyMDI5MGExZTM4NzUwNTAwZjc3ZWRhZmYxZWU0NGMyOTRjZWE2M2Y5ZTRiNGZiNmY4YTE",
        price: "1500",
        id: "asdh",
        desc: "Our lasto-Network primes and instantly improves the look of skin’s texture. Use under your foundation for ",
        title: "Cobra",
        date: "26-Jan-2021"
    },
   
]




{/*

import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../src/slices/userSlice';
import {auth} from "./../firebase";
import { getAuth,onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


function SignupScreen() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    
    const auth = getAuth();

   

    const handleSignIn = () => {
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value,
            )
    .then((userCredential) => {
        dispatch(login({
            uid: userCredential.uid,
            email: userCredential.email,
        }))
        console.log(dispatch)
    const user = userCredential.user;
    console.log("login Hua Hai Ye --",user)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }
    
    return (
        <div>
            <form>
                <h1>Sign In</h1>
                
                <input ref={emailRef} placeholder="Email Id" type="email"/>
                <input ref={passwordRef} placeholder="Password" type="Password"/>

            </form>
            <button onClick={handleSignIn} type="submit">Sign In</button>
        </div>
    )
}

export default SignupScreen

*/}
