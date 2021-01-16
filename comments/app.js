let ProfilePic = () => {
    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Drake_at_The_Carter_Effect_2017_%2836818935200%29_%28cropped%29.jpg" />
        </div>
    )
}

let CommentBody = (props) => {
    return (
        <div>
            <strong>{props.username}</strong>
            <p>{props.comment}</p>
        </div>
    )
}

let Comment = () => {
    return (
        <div>
            <ProfilePic />
            <CommentBody comment="hello world" username="drake"/>
        </div>
    )
}

let Comments = () => {
    return (
        <div> 
            <ul>
                <li><Comment /></li>
                <li><Comment /></li>
                <li><Comment /></li>
                <li><Comment /></li>
            </ul>
        </div>
    )
}

ReactDOM.render(<Comments />, document.getElementById('root'))