import Comment from "../common/comment";

export default function CommentsSection(params) {
    return (
        <div className="shadow-2xl p-5">
            <input className="w-full my-5 p-5 focus:bg-gray rounded-xl" placeholder="Enter your comment"></input> 
            <div>
                <Comment comment="Comment1" time="acum 17 ore" tag="enjoy coding"/>
                <Comment comment="Comment1"/>
                <Comment comment="Comment1"/>
                <Comment comment="Comment1"/>
                <Comment comment="Comment1"/>
            </div> 
        </div>
    )
}