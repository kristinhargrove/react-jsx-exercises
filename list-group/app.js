let ListGroupItem = (props) => {
    return (
            <li>{props.name}</li>
    )
}

let ListGroup = () => {
    return (
        <div>
            <ul>
                <ListGroupItem name="1"/>
                <ListGroupItem name="2"/>
                <ListGroupItem name="3"/>
            </ul>
        </div>
    )
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))