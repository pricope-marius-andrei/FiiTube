import { NavLink } from "react-router-dom"

export default function Button(props) {
    return (
        props.navLink ?
            <NavLink className={(props.inline == true ?  ` flex my-2 ` : ` flex justify-center` )
            + ` justify-left items-center ` 
            + ( props.rounded == true ? `rounded-full w-12 h-12 ` : 'w-full h-fit rounded-xl ')
            + `hover:cursor-pointer hover:bg-gray bg-blue` } to={props.navLink}> 
            {
                props.icon &&
                <span className="flex justify-center p-3">
                    {props.icon}
                </span>
            }

            {
                props.text &&
                <h1 className="ml-5">
                    {props.text}
                </h1>
            }
            </NavLink>
            :
            <button className={
            (props.inline == true ?  ` flex my-2 ` : ` flex justify-center` )
            + ` justify-left items-center ` 
            + ( props.rounded == true ? `rounded-full w-12 h-12 ` : 'w-full h-fit rounded-xl ')
            + `hover:cursor-pointer hover:bg-gray bg-blue `
        }
            onClick={props.onClick}
        >
            {
                props.icon &&
                <span className="flex justify-center p-3">
                    {props.img == true ? <img className="rounded-full h-10" src={props.icon}></img> : props.icon}
                </span>
            }

            {
                props.text &&
                <h1 className="ml-5">
                    {props.text}
                </h1>
            }
        </button>
    )
}