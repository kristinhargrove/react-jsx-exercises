let ListGroupItem = (props) => {
    return (
        <div>
            <li>{props.name}</li>
        </div>
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