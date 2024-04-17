import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { motion } from "framer-motion"

export default function VideoHeader(props) {
    const [statusLike, setStatusLike] = useState(false);
    const [statusDislike, setStatusDislike] = useState(false); 
    const [statusSubscribe, setSubscribeStatus] = useState(false);
    
    return (
        <>
            <div className="flex flex-col shadow-xl px-10">
                <h1 className="font-bold text-2xl">{props.title}</h1>
                <div className="flex w-full justify-between items-center mb-2">
                    <a className="flex h-full items-center w-72 justify-start cursor-pointe px-4 p-5 rounded-xl">
                        <img className="rounded-full w-16" src={props.channel_img}></img>
                        <h2 className="font-bold ml-5">{props.channel_name}</h2>
                        <button className="px-5 py-2 mx-5 bg-gray rounded-2xl active:animate-ping flex text-xl font-semibold" onClick={()=>setSubscribeStatus((status)=>!status)}> {statusSubscribe ? "Subscribed" : "Subscribe"} 
                        {statusSubscribe &&  
                        <motion.span
                        initial={{ y: 'var(--spacing-8)' }}
                        animate={{ y: 0 }}
                        exit={{ y: 'var(--spacing-8)' }}
                        className="ml-2"><FaBell size={25} className=""/></motion.span>}</button>
                    </a>

                    <div className="flex">
                        <button onClick={() => {setStatusLike(!statusLike); setStatusDislike(false)}} className={`flex w-fit justify-between items-center ml-2 mr-1 p-4 hover:bg-gray-600 rounded-xl ` + ` active:bg-gray active:animate-ping ` + (statusLike && `bg-gray`)}>
                           <AiFillLike size={30} color=""/>
                           <p className="font-bold ml-2">{props.likes ? (props.likes > 100000) ? (props.likes / 1000) + "K" : props.likes : "" }</p>
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