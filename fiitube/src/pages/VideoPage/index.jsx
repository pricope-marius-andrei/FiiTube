import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef} from "react"
import Video from "../../components/video";
import VideoHeader from "../../components/video_header";
import Description from "../../components/description";
import CommentsSection from "../../components/comments_section";
import videosData from '../../data/videos.json';
import { CookiesProvider, useCookies } from 'react-cookie'

export default function VideoPage(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [enableHamburger, setEnableHamburger] =  useState(false);
    const [maximaizedVideo, setMaximaizedVideo] = useState(null);
    const firstVideoRef = useRef(null);
    const [notificationStatus, setNotificationStatus] = useState(false);

    const [cookies, setCookie] = useCookies(['maxIndex'])

    useEffect(()=> {
        setCookie('maxIndex', 6, { path: '/videos' })
    },[])
  
  const [maxIndex, setMaxIndex] = useState(parseInt(cookies.maxIndex));


  useEffect(()=> {
    setCookie('maxIndex', maxIndex, { path: '/videos' })
    console.log(maxIndex);
  },[maxIndex]);


    useEffect(() => {
        console.log(maximaizedVideo);
    },[maximaizedVideo])

    
    const headerRef = useRef(null);

    return (
        <div>
            <div className='flex'>
            <div className={`flex w-screen h-full justify-center items-center mx-10`}>
                <div className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-full gap-5 `} >
                    {
                        <div className='col-span-2 row-span-12'>
                        <div className='col-span-2 row-span-1'>
                        {
                            videosData.map((video) => {if(video.id == searchParams.get("id")) { 
                                return <VideoHeader likes={video.likes} title={video.title_video} channel_name={video.channel_name} channel_img={video.channel_img}/>
                            }})
                        }
                        </div>
                        <div className='col-span-2 row-span-1'>
                        {
                            videosData.map((video) => {if(video.id == searchParams.get("id")) { 
                                return <Description views={video.views} date={new Date()} description={video.description}/>
                            }})
                        }
                            
                        </div>
                        <div className='col-span-2 row-span-12'>
                        {
                            videosData.map((video) => {if(video.id == searchParams.get("id")) { 
                                return <CommentsSection comments={video.comments}/>
                            }})
                        }
                            
                        </div>
                        </div>
                    }
                    {
                        videosData.map((video) => {
                            if(video.id != maxIndex + 1) {
                                    if(video.id == searchParams.get("id")) { 
                                    return <Video firstOne={true} videoAdress={video.id} notificationStatus={notificationStatus} hamburgerStatus={enableHamburger} url={`video`+ video.id} key={video} ref={[headerRef, maximaizedVideo]} maximaizedVideo={maximaizedVideo} setMaxVideo={setMaximaizedVideo}/>
                                }
                                else {
                                    return <Video channel_img={video.channel_img} title={video.title_video} videoAdress={video.id} notificationStatus={notificationStatus}  hamburgerStatus={enableHamburger} url={`video`+ (video.id)} key={video} ref={[headerRef, maximaizedVideo]} maximaizedVideo={maximaizedVideo} setMaxVideo={setMaximaizedVideo}/>
                                }
                        }
                    } )
                    }
                </div>
            </div>
      </div>
    </div>
    )
}