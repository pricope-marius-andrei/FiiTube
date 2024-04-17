import Comment from "../common/comment";

export default function CommentsSection(props) {

    console.log(props.comments);
    
    return (
        <div className="shadow-2xl p-5">
            <div className="flex h-24 ">
                <input className="flex justify-center items-center w-full h-24 focus:bg-gray rounded-l-lg p-5" placeholder="Enter your comment"></input> 
                <button className="bg-gray rounded-r-lg p-5 font-semibold">Add comment</button>
            </div>
            <div className="my-5">
                {
                    props.comments.map((comment) => 
                        <Comment key={comment.id} img={comment.channel_img} comment={comment.comment} tag={comment.channel_name}/>
                    )
                }
                {/* <Comment comment="Comment1" time="acum 17 ore" tag="enjoy coding"/>
                <Comment comment="Comment1"/>
                <Comment comment="Comment1"/>
                <Comment comment="Comment1"/>
                <Comment comment="Comment1"/> */}
            </div> 
        </div>
    )
}