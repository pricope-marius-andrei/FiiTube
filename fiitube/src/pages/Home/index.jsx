import { useState,useRef, useEffect } from "react";
import Header from "../../components/header";
import Video from "../../components/video";
import Navbar from "../../components/navbar";
import videosData from "../../data/videos.json"
import { CookiesProvider, useCookies } from 'react-cookie'


export default function Home () {
  const [enableHamburger, setEnableHamburger] =  useState(false);
  const [maximaizedVideo, setMaximaizedVideo] = useState(null);
  const [notificationStatus, setNotificationStatus] = useState(false);

  useEffect(() => {
    console.log(maximaizedVideo);
  },[maximaizedVideo])
  
  const headerRef = useRef(null);
  const [cookies, setCookie] = useCookies(['maxIndex'])

  useEffect(()=> {
    setCookie('maxIndex', 6, { path: '/' })
    setCookie('maxIndex', 6, {path : '/profile'})
  },[])
  
  const [maxIndex, setMaxIndex] = useState(parseInt(cookies.maxIndex));


  useEffect(()=> {
    setCookie('maxIndex', maxIndex, { path: '/' })
    setCookie('maxIndex', maxIndex, {path : '/profile'})
    console.log(maxIndex);
  },[maxIndex]);

  return (
    <div className={enableHamburger == true ? ` h-screen overflow-hidden` : ` ` }>
      {
        (maximaizedVideo == null) &&
        <Header updateMaxIndex={setMaxIndex} notificationStatus={notificationStatus} setNotificationStatus={setNotificationStatus} ref={headerRef} hamburgerBehaviour={() => {if(enableHamburger == true) { setEnableHamburger(false) } else { setEnableHamburger(true) } } }/>
      }
      <div className='flex'>
        {
          enableHamburger &&
          <Navbar hamburgerBehaviour={() => {if(enableHamburger == true) { setEnableHamburger(false) } else { setEnableHamburger(true) } } }/>
        }
        { 
          <div className={`flex w-screen h-full justify-center items-center mx-10`}>

            <div className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-full gap-5 my-5`} >
              {
                videosData.map((video) => {if(video.id != maxIndex + 1) { return <Video channel_img={video.channel_img} title={video.title_video} videoAdress={video.id} notificationStatus={notificationStatus}  hamburgerStatus={enableHamburger} url={`video`+ (video.id)} key={video.id} ref={[headerRef, maximaizedVideo]} maximaizedVideo={maximaizedVideo} setMaxVideo={setMaximaizedVideo}/>}} )
              }
            </div>
          </div>
        }
      </div>
    </div>
  )
}