
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { VolumeUpIcon } from '@heroicons/react/solid';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import {db} from "./../firebase";

 
function TimeLine() {
  const [timeline ,setTimeline ] = useState([]);

useEffect(()=> 
 onSnapshot(
   query(collection(db,"timeline"),orderBy("timestamp","desc")),
   (snaphot) => {
     setTimeline(snaphot.docs);
   }
 ),[])

console.log(timeline)

  let radioIconStyle = {background: "white" }

  return <div>
    <div className="bg-transparent p-20   justify-center text-center ">    
  <p className=" text-slate-600  tracking-[6px] mx-auto my-auto mb-5  " >DON'T MISS OUT</p> 
    <p className=" font-bold  text-gray-800 w-full text-center justify-center border-white text-5xl " > Upcoming Events</p>
    </div>
  
  
  <div className=" bg-gray-100  rounded-lg " >

    <VerticalTimeline>
      {timeline.map((post) => (
        
        <VerticalTimelineElement
        key={timeline.id}
        date={post.data().date}
        dateClassName="  text-xs font-bold "
        thumbnail = {post.data().images}
        iconStyle={radioIconStyle }
        icon={<VolumeUpIcon  className=" h-10 cursor-pointer text-purple-500 " />}  
        img={post.data().images}
        >
          <div className=" flex space-x-3 ">
            <div className=" flex-col " >
            <h1 className=" text-2xl font-bold  text-purple-500 " >{post.data().title} </h1>
            <p className=" text-sm font-thin  mr-12 text-slate-600   " >{post.data().caption}</p>
            <p className=' text-sm font-bold  text-black '>{post.data().date}</p>
            </div>
            <img src={post.data().images} alt="/" className=" rounded-md h-20   object-contain   mt-auto  mb-auto" />
          </div>
          </VerticalTimelineElement>
      ))}
  
  </VerticalTimeline>
  </div>
  </div>;

}

export default TimeLine;
