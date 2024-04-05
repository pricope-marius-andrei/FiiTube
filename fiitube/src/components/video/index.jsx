import { MdReport } from "react-icons/md";
import { FiMaximize2 } from "react-icons/fi";
import { FaWindowMinimize } from "react-icons/fa6";
import { forwardRef, useState } from "react";

const Video = forwardRef((props, ref) => {
    const [maximaizeVideo, setMaximaizeVideo] = useState(false);

    

    const scrollBottom = e => {
        console.log("Ceva");
        window.scrollTo({ top: e.current.offsetTop, behavior: 'smooth' });
    };

    

    return (
        <>
            <div className={`flex flex-col w-full bg-blue hover:bg-gray rounded-2xl shadow-lg ` + (maximaizeVideo ? ` col-span-3 row-span-2 h-screen order-first transition-all` : ` h-96 transition-all`)}>
                <div className="flex flex-row-reverse z-0 w-full justify-start p-3">
                    <button className="flex w-5 h-5 bg-light-gray hover:bg-red-600 cursor-pointer rounded-full justify-center items-center mx-1"><MdReport opacity="40%" alignmentBaseline="center"  size={20} color="white"/></button>
                    <button 
                        className="flex w-5 h-5 bg-light-gray hover:bg-yellow-500 cursor-pointer rounded-full justify-center items-center mx-1"
                        onClick={() => {setMaximaizeVideo(false)}} 
                    >
                        <FaWindowMinimize opacity="40%" alignmentBaseline="center"  size={12} color="black"/>
                    </button>
                    
                    <button 
                        className="flex w-5 h-5 bg-light-gray hover:bg-green-500 cursor-pointer rounded-full justify-center items-center mx-1"
                        onClick={() => {setMaximaizeVideo(!maximaizeVideo); ()=> {window.scrollTo(0, 0)}}}    
                    >
                            <FiMaximize2 opacity="40%" alignmentBaseline="center" size={14} color="black"/>
                    </button>
                    
                    {/* <span></span> */}
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </>
    )
}) 

export default Video
  