import { useRef } from "react";
import Navbar from "../../components/navbar";
import { useState } from "react";
import Video from "../../components/video";

export default function Profile() {
    const videos = [1,2,3,5];
    const headerRef = useRef(null);
    const [maximaizedVideo, setMaximaizedVideo] = useState(null);
    return (
        <div ref={headerRef} className="flex h-full">
            <Navbar block={true}/>
            <div className="flex flex-col w-full h-full justify-around items-center p-28">
                <div className="flex w-full h-full justify-around items-center ">
                    <img className="rounded-full" src="https://yt3.googleusercontent.com/615V3ooQrApySHmg9g_z3b2_Tb8ncQsYx_WZv-4S9T14cs23Mf1MrOYWmjbeSTEMdryIfN_Lp0A=s176-c-k-c0x00ffffff-no-rj"/>
                    <button className="rounded-2xl bg-gray hover:bg-gray-600 w-96 px-5 py-2 font-semibold text-sm">Personalize the channel</button>
                    <button className="rounded-2xl bg-gray hover:bg-gray-600 w-96 px-5 py-2 font-semibold text-sm">Manage videos</button>
                </div>
                <div className="flex flex-col w-full">
                    <h1 className="text-xl font-bold mt-10 ml-10 text-left ">Videos</h1>
                    <div className="flex">
                    {
                        videos.map((video) =>
                        <div className="m-3">
                            <Video url={`video`+video%4} key={video} ref={[headerRef, maximaizedVideo]} maximaizedVideo={maximaizedVideo} setMaxVideo={setMaximaizedVideo}/>
                        </div>
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}