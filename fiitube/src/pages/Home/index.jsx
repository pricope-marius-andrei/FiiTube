import { useState,useRef, useEffect } from "react";
import Header from "../../components/header";
import Video from "../../components/video";
import VideoHeader from "../../components/video_header";
import CommentsSection from "../../components/comments_section";
import Description from "../../components/description";
import Navbar from "../../components/navbar";


export default function Home () {
  const [enableHamburger, setEnableHamburger] =  useState(false);
  const [maximaizedVideo, setMaximaizedVideo] = useState(null);

  useEffect(() => {
    console.log(maximaizedVideo);
  },[maximaizedVideo])
  
  const headerRef = useRef(null);
  const videos = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className={enableHamburger == true ? ` h-screen overflow-hidden` : ` ` }>
      {
        (maximaizedVideo == null) &&
        <Header ref={headerRef} hamburgerBehaviour={() => {if(enableHamburger == true) { setEnableHamburger(false) } else { setEnableHamburger(true) } } }/>
      }
      <div className='flex'>
        {
          enableHamburger &&
          <Navbar hamburgerBehaviour={() => {if(enableHamburger == true) { setEnableHamburger(false) } else { setEnableHamburger(true) } } }/>
        }
        {

          
          <div className={`flex w-screen h-full justify-center items-center mx-10`}>

            <div className={`w-full grid grid-cols-3 grid-rows-full gap-5 ` + (maximaizedVideo == null && ` mt-10` )} >
            {
              (maximaizedVideo != null) &&
                <div className='col-span-2 row-span-12'>
                  <div className='col-span-2 row-span-1'>
                    <VideoHeader/>
                  </div>
                  <div className='col-span-2 row-span-1'>
                    <Description views={120300} date={new Date()} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
                  </div>
                  <div className='col-span-2 row-span-12'>
                    <CommentsSection/>
                  </div>
                </div>
            }
              {
                videos.map((video) => <Video key={video} ref={[headerRef, maximaizedVideo]} maximaizedVideo={maximaizedVideo} setMaxVideo={setMaximaizedVideo}/> )
              }
            </div>
          </div>
        
        }
      </div>
    </div>
  )
}