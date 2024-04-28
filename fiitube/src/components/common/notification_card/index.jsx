export default function NotificationCard(props) {
    return (
        <div className="flex bg-blue hover:bg-gray rounded-xl p-5 m-2 justify-between items-center shadow-lg">
            <img className="rounded-full h-16" src={props.channelImg}/>
            <div className="flex flex-col ml-10">
                <p className="font-bold">New video from {props.channel}</p>
                <p className="font-normal text-gray-300">{new Date().toDateString()}</p>
            </div>
            <img className="w-1/3" src="https://i9.ytimg.com/vi_webp/VtbVeR7obnw/mqdefault.webp?v=63314e87&sqp=CJCk9LAG&rs=AOn4CLCA20G8eqKPBsTIBv_DQ-EqSYgqfQ"/>
        </div>
    )
}