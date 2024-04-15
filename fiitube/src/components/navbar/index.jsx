import Button from "../common/button";
import { AiFillHome } from "react-icons/ai";
import { FaFire } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { FiAlignJustify } from "react-icons/fi";
import { FaPersonSkating } from "react-icons/fa6";
import { motion } from "framer-motion"
import Logo from "../common/logo";

export default function Navbar(props) {
    return (
        <motion.nav 
            initial={{ x: 'var(--spacing-8)'}}
            animate={{ x: 0}}
            exit={{ x : 'var(--spacing-8)' }}
            className="fixed z-20 top-0 flex flex-col bg-blue shadow-2xl w-72 h-screen no-scrollbar overflow-y-scroll overflow-x-hidden px-4">
            <section className="flex flex-col w-full h-fit my-2 mx-2">
                <div className="flex">
                    <div className="py-2">
                        <Button onClick={props.hamburgerBehaviour} icon={<FiAlignJustify size={30}/>} rounded={true} inline={false}/>
                    </div>
                    <Logo/>
                </div>
                <Button navLink={"/"} text="Acasa" rounded={false} inline={true} icon={<AiFillHome size={30}/>}/> 
                <Button text="Trending" rounded={false} inline={true} icon={<FaFire size={30}/>}/> 
                <Button text="Tu" rounded={false}  inline={true} icon={<FaFolderOpen size={30}/>}/> 
            </section>
            <section className="flex flex-col w-full h-fit justify-center">
                <h1 className="text-center font-semibold text-2xl">Abonamente</h1>
                <section className="flex flex-col w-full my-5">
                    <Button text="Enjoy Coding" inline={true} rounded={false} icon={<FaPersonSkating size={30}/>} /> 
                    <Button text="Enjoy Coding" inline={true} rounded={false} icon={<FaPersonSkating size={30}/>} /> 
                    <Button text="Enjoy Coding" inline={true} rounded={false} icon={<FaPersonSkating size={30}/>} /> 
                    <Button text="Enjoy Coding" inline={true} rounded={false} icon={<FaPersonSkating size={30}/>} /> 
                    <Button text="Enjoy Coding" inline={true} rounded={false} icon={<FaPersonSkating size={30}/>} /> 
                    <Button text="Enjoy Coding" inline={true} rounded={false} icon={<FaPersonSkating size={30}/>} /> 
                    <Button text="Enjoy Coding" inline={true} rounded={false} icon={<FaPersonSkating size={30}/>} /> 

                </section>
            </section>
        </motion.nav>
    )
}