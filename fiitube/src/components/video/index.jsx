import { MdReport } from "react-icons/md";
import { FiMaximize2 } from "react-icons/fi";
import { FaWindowMinimize } from "react-icons/fa6";
import { forwardRef, useEffect, useRef, useState } from "react";
import {AdvancedVideo, AdvancedImage, lazyload} from "@cloudinary/react";
import {Cloudinary} from "@cloudinary/url-gen";
import { useImperativeHandle } from "react";
import 'cloudinary-video-player/cld-video-player.min.css';
import { Link } from 'react-router-dom';

const cld = new Cloudinary({cloud: {
    cloudName: 'dvowumf2k',
}
});  

const Video = forwardRef((props, ref) => {
    const [maximaizeVideo, setMaximaizeVideo] = useState(false);
    const videoRef = useRef(null);
    const buttonMaxRef = useRef(null);

    useImperativeHandle(videoRef,() => ({
        setMaximaizeVideo
    }));

    useEffect(()=> {
        if(props.firstOne && buttonMaxRef != null)
        {
            buttonMaxRef.current.click();
            if(ref[1] != null)
            {
                ref[1].current.setMaximaizeVideo(true);
            }
        }
    },[])
    
    return (
        <>
            <div ref={videoRef} className={`flex flex-col h-fit bg-blue ` + (props.hamburgerStatus == false && props.notificationStatus == false && `hover:bg-gray `) + `rounded-2xl shadow-lg ` + (maximaizeVideo ? ` col-span-3 row-span-2 h-screen order-first transition-all` : ` h-96 transition-all`)}>
                <div className="flex flex-row-reverse z-0 w-full justify-start p-2">
                    <button className={`flex w-5 h-5 bg-light-gray ` + ((props.hamburgerStatus == false && props.notificationStatus == false) ?  ` hover:bg-red-600 cursor-pointer` : ` cursor-default `) + ` rounded-full justify-center items-center mx-1`}><MdReport opacity="40%" alignmentBaseline="center"  size={20} color="white"/></button>
                    {
                        maximaizeVideo ?
                        <Link 
                        to={"/"}
                        className={`flex w-5 h-5 bg-light-gray ` + (props.hamburgerStatus == false && props.notificationStatus == false &&  ` hover:bg-yellow-500 cursor-pointer`) + ` rounded-full justify-center items-center mx-1`}
                        onClick={() => {if(props.maximaizedVideo != null && maximaizeVideo == true && props.hamburgerStatus == false && props.notificationStatus == false) {setMaximaizeVideo(false); props.setMaxVideo(null);}}} 
                    >
                        <FaWindowMinimize opacity="40%" alignmentBaseline="center"  size={12} color="black"/>
                    </Link>
                        :
                        <button 
                        className={`flex w-5 h-5 bg-light-gray ` + (props.hamburgerStatus == false && props.notificationStatus == false &&  ` hover:bg-yellow-500 cursor-pointer`) + ` rounded-full justify-center items-center mx-1`}
                        onClick={() => {if(props.maximaizedVideo != null && maximaizeVideo == true && props.hamburgerStatus == false && props.notificationStatus == false) {setMaximaizeVideo(false); props.setMaxVideo(null);}}} 
                        >
                        <FaWindowMinimize opacity="40%" alignmentBaseline="center"  size={12} color="black"/>
                    </button>
                    }
                    
                    <Link 
                        ref={buttonMaxRef}
                        to={{ pathname: "/videos" , search: `?id=` + props.videoAdress}}
                        className={`flex w-5 h-5 bg-light-gray ` + (props.hamburgerStatus == false && props.notificationStatus == false && ` hover:bg-green-500 cursor-pointer`) +  `  rounded-full justify-center items-center mx-1`}
                        onClick={() => {
                            if(props.hamburgerStatus == false && props.notificationStatus == false) {
                                if(maximaizeVideo == true)
                                {
                                    props.setMaxVideo(null);
                                }
                                else 
                                {
                                    if(ref[1] != null) {
                                        ref[1].current.setMaximaizeVideo(false);
                                    }
                                    props.setMaxVideo(videoRef);

                                }
                                setMaximaizeVideo(!maximaizeVideo);
                                window.scrollTo({top:ref[0], behavior: 'instant'})
                            }   
                        }}    
                    >

                        <FiMaximize2 opacity="40%" alignmentBaseline="center" size={14} color="black"/>
                    </Link>
                    
                </div>
                <div className="group relative flex h-full w-full items-center justify-center">
                    {
                        !maximaizeVideo &&
                        <AdvancedImage
                        className={`flex justify-center items-center z-10 ` +  (props.hamburgerStatus == false && props.notificationStatus == false && `group-hover:opacity-0 group-hover:cursor-pointer`)}
                        width="110%"
                        height="100%"
                        cldImg={cld.image(`MyVideos/${props.url}`).setAssetType('video').format('auto:image')}
                    />}

                    {
                        maximaizeVideo || props.firstOne ? 
                        <AdvancedVideo
                            controls
                            autoPlay
                            width="1100px"
                            color="dark-blue"
                            className="flex justify-center items-center z-0"
                            cldVid={cld.video(`MyVideos/${props.url}`)}
                            plugins={[lazyload()]}
                            />
                        :
                        <AdvancedVideo
                            autoPlay
                            loop
                            muted
                            width="100%"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
                            cldVid={cld.video(`MyVideos/${props.url}`).effect('e_preview:duration_4').effect('e_progressbar:bar:2C2C4B:20')}
                            plugins={[lazyload()]}
                            />
                }
                </div>
                {
                    !maximaizeVideo &&
                    <div className="flex h-20 ml-5 my-2 items-center">
                        <img src={props.channel_img} className="h-10 w-10 rounded-full cursor-pointer"></img>
                        <h1 className="font-bold lg:text-xl sm:text-base text-xl mx-4">{props.title}</h1>
                    </div>
                }
            </div>
        </>
    )
}) 

export default Video
  