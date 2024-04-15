import { MdReport } from "react-icons/md";
import { FiMaximize2 } from "react-icons/fi";
import { FaWindowMinimize } from "react-icons/fa6";
import { forwardRef, useRef, useState } from "react";
import {AdvancedVideo, AdvancedImage, lazyload} from "@cloudinary/react";
import {Cloudinary} from "@cloudinary/url-gen";
import { useImperativeHandle } from "react";
import 'cloudinary-video-player/cld-video-player.min.css';

const cld = new Cloudinary({cloud: {cloudName: 'dvowumf2k'}});  

const Video = forwardRef((props, ref) => {
    const [maximaizeVideo, setMaximaizeVideo] = useState(false);
    const videoRef = useRef(null);

    useImperativeHandle(videoRef,() => ({
        setMaximaizeVideo
    }));
    
    return (
        <>
            <div ref={videoRef} className={`flex flex-col h-fit bg-blue ` + (props.hamburgerStatus == false && `hover:bg-gray `) + `rounded-2xl shadow-lg ` + (maximaizeVideo ? ` col-span-3 row-span-2 h-screen order-first transition-all` : ` h-96 transition-all`)}>
                <div className="flex flex-row-reverse z-0 w-full justify-start p-2">
                    <button className={`flex w-5 h-5 bg-light-gray ` + (props.hamburgerStatus == false && ` hover:bg-red-600 cursor-pointer`) + ` rounded-full justify-center items-center mx-1`}><MdReport opacity="40%" alignmentBaseline="center"  size={20} color="white"/></button>
                    <button 
                        className={`flex w-5 h-5 bg-light-gray ` + (props.hamburgerStatus == false &&  ` hover:bg-yellow-500 cursor-pointer`) + ` rounded-full justify-center items-center mx-1`}
                        onClick={() => {if(props.maximaizedVideo != null && maximaizeVideo == true) {setMaximaizeVideo(false); props.setMaxVideo(null);}}} 
                    >
                        <FaWindowMinimize opacity="40%" alignmentBaseline="center"  size={12} color="black"/>
                    </button>
                    
                    <button 
                        className={`flex w-5 h-5 bg-light-gray ` + (props.hamburgerStatus == false && ` hover:bg-green-500 cursor-pointer`) +  `  rounded-full justify-center items-center mx-1`}
                        onClick={() => {
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
                        }}    
                    >

                        <FiMaximize2 opacity="40%" alignmentBaseline="center" size={14} color="black"/>
                    </button>
                    
                    {/* <span></span> */}
                </div>
                <div className="group relative flex h-full w-full items-center justify-center">
                    {
                        !maximaizeVideo &&
                        <AdvancedImage
                        className={`flex justify-center items-center z-10 ` +  (props.hamburgerStatus == false && `group-hover:opacity-0 group-hover:cursor-pointer`)}
                        width="110%"
                        height="100%"
                        cldImg={cld.image(`MyVideos/${props.url}`).setAssetType('video').format('auto:image')}
                    />}

                    {
                        maximaizeVideo ? 
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
                            cldVid={cld.video(`MyVideos/${props.url}`).effect('e_preview:duration_4')}
                            plugins={[lazyload()]}
                            />
                }
                </div>
                {
                    !maximaizeVideo &&
                    <div className="flex h-20 ml-5 items-center">
                        <img className="h-10 w-10 rounded-xl cursor-pointer"></img>
                        <h1 className="font-bold text-xl ml-4">Title of the video</h1>
                    </div>
                }
            </div>
        </>
    )
}) 

export default Video
  