import Button from "../common/button"
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import SearchBar from "../common/searchbar";

export default function Header() {
    return (
        <div className="flex p-2 bg-purple w-full h-fit font-semibold shadow-xl">
            {/* <Button icon={<IoIosNotificationsOutline size={30}/>}></Button>
            <Button icon={<FiUpload size={30}/>}></Button> */}
            <SearchBar/>
        </div>
    )
}