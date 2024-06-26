import Button from "../common/button";
import { AiFillHome } from "react-icons/ai";
import { FaFire } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { FiAlignJustify } from "react-icons/fi";
import { FaPersonSkating } from "react-icons/fa6";
import { motion } from "framer-motion"
import Logo from "../common/logo";
import subsciptions from "./../../data/subscriptions.json"

export default function Navbar(props) {
    return (
        <motion.nav 
            initial={{ x: 'var(--spacing-8)'}}
            animate={{ x: 0}}
            exit={{ x : 'var(--spacing-8)' }}
            className={props.block ? `block` : `fixed` +  ` z-20 top-0 flex flex-col bg-blue shadow-2xl w-72 h-screen no-scrollbar overflow-y-scroll overflow-x-hidden px-4`}>
            <section className="flex flex-col w-full h-fit my-2 mx-2">
                <div className="flex">
                    <div className={`py-2 ` + (props.block && `hidden`)}>
                        <Button img={false} onClick={props.hamburgerBehaviour} icon={<FiAlignJustify size={30}/>} rounded={true} inline={false}/>
                    </div>
                    <Logo/>
                </div>
                <Button navLink={"/"} text="Home" rounded={false} inline={true} icon={<AiFillHome size={30}/>}/> 
                <Button navLink={"/"} text="Trending" rounded={false} inline={true} icon={<FaFire size={30}/>}/> 
                <Button navLink={"/profile"} text="You" rounded={false}  inline={true} icon={<FaFolderOpen size={30}/>}/> 
            </section>
            <section className="flex flex-col w-full h-fit justify-center">
                <h1 className="text-center font-semibold text-2xl">Subscriptions</h1>
                <section className="flex flex-col w-full my-5">
                    {
                        subsciptions.map((subsciption) =>
                            <Button img={true} text={subsciption.channel_name} inline={true} rounded={false} icon={subsciption.channel_img} /> 
                        )
                    }
                </section>
            </section>
        </motion.nav>
    )
}