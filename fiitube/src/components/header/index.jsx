import Button from "../common/button";
import SearchBar from "../common/searchbar";
import { FiAlignJustify } from "react-icons/fi";
import Logo from "../common/logo";

export default function Header(props) {
    return (
        <header className="flex z-10 px-4 py-2 bg-blue w-full h-fit justify-between font-semibold shadow-xl sticky top-0">
            <div className="flex w-fit items-center justify-center p-2">
                <Button onClick={props.hamburgerBehaviour} icon={<FiAlignJustify size={30}/>} rounded={true} inline={false}/>
                <Logo/>
            </div>
            <SearchBar/>
        </header>
    )
}