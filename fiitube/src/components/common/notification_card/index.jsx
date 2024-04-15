export default function NotificationCard(props) {
    return (
        <div className="flex bg-blue hover:bg-gray rounded-xl p-5 m-2 justify-between shadow-lg">
            <img className="rounded-full h-16" src="https://yt3.googleusercontent.com/615V3ooQrApySHmg9g_z3b2_Tb8ncQsYx_WZv-4S9T14cs23Mf1MrOYWmjbeSTEMdryIfN_Lp0A=s176-c-k-c0x00ffffff-no-rj"/>
            <div className="flex flex-col">
                <p className="font-bold">New video from MrBeast</p>
                <p className="font-normal text-gray-300">time</p>
            </div>
            <img className="w-1/3" src="https://i9.ytimg.com/vi_webp/VtbVeR7obnw/mqdefault.webp?v=63314e87&sqp=CJCk9LAG&rs=AOn4CLCA20G8eqKPBsTIBv_DQ-EqSYgqfQ"/>
        </div>
    )
}