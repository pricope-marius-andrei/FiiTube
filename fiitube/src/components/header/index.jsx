import Button from "../common/button";
import SearchBar from "../common/searchbar";
import { FiAlignJustify } from "react-icons/fi";
import { TfiUpload } from "react-icons/tfi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import Logo from "../common/logo";

import { forwardRef, useRef } from "react";


const Header = forwardRef((props,ref) => {

    return (
        <header ref={ref} className="flex z-10 px-4 py-2 bg-blue w-full h-fit justify-between font-semibold shadow-xl sticky top-0">
            <div className="flex w-fit items-center justify-center p-2">
                <Button onClick={props.hamburgerBehaviour} icon={<FiAlignJustify size={30}/>} rounded={true} inline={false}/>
                <Logo/>
            </div>
            <SearchBar/>
            <div className="flex items-center justify-between w-60">
                <Button onClick="#" icon={<TfiUpload size={20}/>} rounded={true} inline={false}/>
                <Button onClick="#" icon={<IoIosNotificationsOutline size={30}/>} rounded={true} inline={false}/>
                <Button onClick="#" icon={<BsPersonCircle size={35}/>} rounded={true} inline={false}/>
            </div>
        </header>
    )
})

export default Header;