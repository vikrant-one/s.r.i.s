import SignupScreen from '../BackendComp/SignupScreen';
import {useSelector } from 'react-redux';
import { selectUser } from "./slices/userSlice";
import {  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login,logout } from './slices/userSlice';
import {auth} from "../firebase";
import Dropzone from './compo/Dropzone';
import BannerDrop from './compo/BannerDrop';
import SecondBannerDrop from "./compo/ScondBannerDrop";
import TimelineDrop from './compo/TimelineDrop';
import VedioDropzone from './compo/VedioDropzone';
import Noticedrop from './compo/Noticedrop';
import ThirdBannerDrop from './compo/ThirdBannerDrop';
import FourthbannerDrop from './compo/FourthbannerDrop';
import FirstfounderDrop from './compo/FirstfounderDrop';
import SecondfounderDrop from './compo/SecondFounderDrop';
import ThirdfounderDrop from './compo/ThirdFounderDrop';
import Head from 'next/head';
import Carosel from '../components/Carosel';
import HeaderTop from '../components/HeaderTop';
import Footer from '../components/Footer';


function Dashbord() {   
    const Auther =  useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userCredential) => {
             if (userCredential) {
                 dispatch(login({
                     uid: userCredential.uid,
                     email: userCredential.email,
                 }))
             } else {
                 dispatch(logout());
             }
         })

     return unsubscribe;

    },[dispatch]);


    return (
        <div>
        <Head>
        <title>S.R.International School</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
        <>
        {!Auther ? (
            <SignupScreen />
        ) : (
            <div>
                 <HeaderTop />
        <div  className=' p-5 overflow-hidden '>
       
        <div className="mt-10  mb-14 flex flex-col justify-center text-center xl:max-w-[900px]  ml-auto mr-auto px-[20px] xl:px-20 " >
          <p className=" text-slate-600  tracking-[8px]  uppercase " >Banner  SECTION</p>
          <p className=" font-bold text-gray-800 w-full text-center justify-center   text-4xl xl:text-[45px] pb-4 pt-6   y-4  border-white " > Upload A New Banner  </p>
        </div>
        <Carosel />
        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-y-6 md:px-10 xl:gap-x-[50px]  py-14  bg-white shadow-xl align-middle justify-center  text-grey-600  '>
        <div>
        <BannerDrop />
        </div>
        <div>
        <SecondBannerDrop />
        </div>
        <div>
        <ThirdBannerDrop />
        </div>
        <div>
        <FourthbannerDrop />
        </div>
        </div>
        <div className="mt-10  mb-14 flex flex-col justify-center text-center xl:max-w-[900px]  ml-auto mr-auto px-[20px] xl:px-20 " >
          <p className=" text-slate-600  tracking-[8px]  uppercase " >Gallery SECTION</p>
          <p className=" font-bold text-gray-800 w-full text-center justify-center   text-4xl xl:text-[45px] pb-4 pt-6   y-4  border-white " > Upload To Gallery  </p>
        </div>
      <Dropzone />
      <TimelineDrop />
      <VedioDropzone />
      <div className="mt-10  mb-14 flex flex-col justify-center text-center xl:max-w-[900px]  ml-auto mr-auto px-[20px] xl:px-20 " >
          <p className=" text-slate-600  tracking-[8px]  uppercase " >FOUNDER  SECTION</p>
          <p className=" font-bold text-gray-800 w-full text-center justify-center   text-4xl xl:text-[45px] pb-4 pt-6   y-4  border-white " > ADD YOUR FOUNDER  </p>
        </div>
      <div className='mt-4 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3  gap-y-6 md:px-10 xl:gap-x-[50px]  py-14  bg-white shadow-xl align-middle justify-center  text-grey-600  ' >
          <div>
          <FirstfounderDrop />
          </div>
          <div>
          <SecondfounderDrop />
          </div>
          <div>
          <ThirdfounderDrop />
          </div>
      </div>
      <Noticedrop />
      
      
      <button className='button bg-red-600 text-white w-full  xl:max-w-[500px] mt-20  flex  mb-10 justify-center ml-auto mr-auto text-xl ' onClick={()=> auth.signOut()}>Sign OUT</button>

      </div>
          
        <Footer />
            </div>

        )}
        </>
        </div>
        </div>
    )
}

export default Dashbord
