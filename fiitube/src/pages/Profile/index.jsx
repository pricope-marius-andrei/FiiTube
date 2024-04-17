import { useRef } from "react";
import Logo from "../../components/common/logo"
import { useState, useEffect } from "react";
import Video from "../../components/video";
import { NavLink } from "react-router-dom";
import { MdOutlinePhotoCamera } from "react-icons/md";
import videosData from "../../data/videos.json";

import { CookiesProvider, useCookies } from 'react-cookie'

export default function Profile() {
    const headerRef = useRef(null);
    const [maximaizedVideo, setMaximaizedVideo] = useState(null);
    const [banner, setBanner] = useState(null);
    const [profilePhoto, setProfilePhoto] = useState(null);

    const [cookies, setCookie] = useCookies(['maxIndex'])
    
    const [maxIndex, setMaxIndex] = useState(parseInt(cookies.maxIndex));


    useEffect(()=> {
        setCookie('maxIndex', maxIndex, { path: '/' })
        console.log(maxIndex);
    },[maxIndex]);

    return (
        <div ref={headerRef} className="flex h-full">
            {
                maximaizedVideo == null &&
                <NavLink to={"/"} className="absolute z-10 top-5 left-5">
                    <Logo/>
                </NavLink>
            }
            <div className="flex flex-col w-full h-full justify-around items-center p-28">
                {
                    maximaizedVideo == null &&
                    <div className="flex w-full h-full justify-around items-end ">
                        <div className="absolute bg-gray opacity-70 w-full h-48 top-0 z-0">
                                <label for="upload-banner" className={(!banner ? `flex w-full h-full justify-center items-center cursor-pointer` : `hidden`)}><MdOutlinePhotoCamera size={30}/></label>
                                <input id="upload-banner" name="photo" onChange={(e)=> {setBanner(e.target.files[0])}} className="hidden w-full h-full" type="file" alt="Not found"/>
                                {
                                    banner && <img className="object-cover w-full h-full" src={URL.createObjectURL(banner)}></img> 
                                }
                        </div>
                        <label for="upload-photo" className={(!profilePhoto ? `flex z-10 h-32 w-32 justify-center items-center bg-gray rounded-full cursor-pointer` : `hidden`)}><MdOutlinePhotoCamera size={30}/></label>
                        <input id="upload-photo" name="photo" onChange={(e)=> {setProfilePhoto(e.target.files[0])}} className="hidden w-full h-full" type="file" alt="Not found"/>
                        {
                            profilePhoto && <img className="h-32 w-32 z-10 object-fill rounded-full" src={URL.createObjectURL(profilePhoto)}></img> 
                        }


                        <button className="rounded-2xl z-10 bg-gray hover:bg-gray-600 w-96 px-5 py-2 font-semibold text-sm">Personalize the channel</button>
                        <button className="rounded-2xl z-10 bg-gray hover:bg-gray-600 w-96 px-5 py-2 font-semibold text-sm">Manage videos</button>
                    </div>
                }
            
                <div className="flex flex-col w-full">
                    {   
                        maximaizedVideo == null &&
                        <h1 className="text-xl font-bold mt-10 ml-10 text-left ">My videos</h1>
                    }
                    <div className="grid grid-cols-3 gap-5 mt-5">
                        {
                            videosData.map((video) => {if(video.id == maxIndex && maxIndex == 7) { return <Video channel_img={video.channel_img} title={video.title_video} videoAdress={video.id} notificationStatus={false}  hamburgerStatus={false} url={`video`+ (video.id)} key={video.id} ref={[headerRef, maximaizedVideo]} maximaizedVideo={maximaizedVideo} setMaxVideo={setMaximaizedVideo}/>}} )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}