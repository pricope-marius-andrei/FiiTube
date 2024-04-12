import Button from "../common/button";
import SearchBar from "../common/searchbar";
import { FiAlignJustify } from "react-icons/fi";
import { TfiUpload } from "react-icons/tfi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import Logo from "../common/logo";
import { NavLink } from 'react-router-dom';

import { forwardRef, useRef, useEffect } from "react";
import Profile from "../../pages/Profile";


const Header = forwardRef((props,ref) => {

    const widgetRef = useRef();
    const cloudinaryRef = useRef();
    useEffect(() => {
      cloudinaryRef.current = window.cloudinary;
      widgetRef.current = cloudinaryRef.current.createUploadWidget({
        cloudName: "dvowumf2k",
        uploadPreset: "otxanyar",
        sources: ['local'],
        showAdvancedOptions: true,
        getUploadPresets : ["video"],

        styles:{
            palette: {
              window: "#212130",
              windowBorder: "#white",
              tabIcon: "white",
              menuIcons: "#E4DFED",
              textDark: "#FFFFFF",
              textLight: "#00000",
              link:  "white",
              action:  "#FF620C",
              inactiveTabIcon: "#0E2F5A",
              error: "#F44235",
              inProgress: "#0078FF",
              complete: "#20B832",
              sourceBg: "#E4EBF1"
            },
            frame: {
              background: "#212130"
            },
            fonts: {
                // "'Cute Font', cursive": "https://fonts.googleapis.com/css?family=Cute+Font",
            },
        }
      }, function(error, result) {
        console.log(error);
      });
    },[])

    return (
        <header ref={ref} className="flex z-20 px-4 py-2 bg-blue w-full h-fit justify-between font-semibold shadow-xl sticky top-0">
            <div className="flex w-fit items-center justify-center p-2">
                <Button onClick={props.hamburgerBehaviour} icon={<FiAlignJustify size={30}/>} rounded={true} inline={false}/>
                <Logo/>
            </div>
            <SearchBar/>
            <div className="flex items-center justify-between w-60">
                <Button onClick={() => {widgetRef.current.open()}} icon={<TfiUpload size={20}/>} rounded={true} inline={false}/>
                <Button onClick="#" icon={<IoIosNotificationsOutline size={30}/>} rounded={true} inline={false}/>
                <Button navLink="/profile" icon={<BsPersonCircle size={35}/>} rounded={true} inline={false}/>
            </div>
        </header>
    )
})

export default Header;