import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
    return  (
        <div className="flex w-full justify-center items-center sticky placeholder:text-white">
            <input className="bg-light-purple focus:bg-gray w-1/3 px-10 rounded-2xl outline-none border-none py-2" type="search" placeholder="Search"/>
        </div>
    )
}