import { FaSearch } from "react-icons/fa";
import { useRef, useEffect } from "react";

export default function SearchBar(props) {

    const searchBarRef = useRef(null);

    useEffect(() => {
        if (searchBarRef.current) {
            searchBarRef.current.focus();
          }
    },[])

    return  (
        <div className="flex w-full justify-center items-center sticky placeholder:text-white">
            <input ref={searchBarRef} className="bg-light-purple focus:bg-gray w-1/3 px-10 rounded-2xl outline-none border-none py-2 shadow-md shadow-slate-300 " type="search" placeholder="Search"/>
        </div>
    )
}