import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";

export default function VideoHeader(props) {
    const [statusLike, setStatusLike] = useState(false);
    const [statusDislike, setStatusDislike] = useState(false); 
    return (
        <>
            <div className="flex flex-col shadow-xl px-10">
                <h1 className="font-bold text-2xl">Title of the video. Amazing video!!!!!</h1>
                <div className="flex w-full justify-between items-center mb-2">
                    <button className="flex h-full items-center w-72 justify-between cursor-pointer hover:bg-gray-600 active:animate-ping px-4 p-2 rounded-xl">
                        <img className="rounded-full w-16" src="src/assets/images/avatar.jpg"></img>
                        <h2 className="font-bold ">Name of the channel</h2>
                    </button>

                    <div className="flex">
                        <button onClick={() => {setStatusLike(!statusLike); setStatusDislike(false)}} className={`flex items-center ml-2 mr-1 p-4 hover:bg-gray-600 rounded-xl ` + ` active:bg-gray active:animate-ping ` + (statusLike && `bg-gray`)}>
                           <AiFillLike size={30} color=""/>
                           <p className="font-bold">120K</p>
                        </button>
                        <button onClick={() => {setStatusDislike(!statusDislike); setStatusLike(false)}} className={`mx-1 p-4 hover:bg-gray-600 rounded-xl `  + ` active:bg-gray active:animate-ping ` + (statusDislike && `bg-gray`)}>
                            <AiFillDislike size={30}/>
                        </button>
                        <button className={`flex items-center justify-around w-40 mx-1 p-4 hover:bg-gray-600 rounded-xl active:bg-gray active:animate-ping`}>
                            <FaShareAlt size={30}/>
                            <p className="font-bold">Share</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}