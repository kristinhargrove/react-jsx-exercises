let Header = () => {
    return (
        <h1>Kristin Hargrove's Fun-times Blog</h1>
    )
}
let Article = (props) => {
    return (
        <article>{props.articlename}</article>
    )
}
let Footer = () => {
    return (
        <footer>designed by KH</footer>
    )
}

let Blog = () => {
    return (
        <div>
            <Header />
            <Article articlename="Hello world" />
            <Article articlename="Goodbye world" />
            <Footer />
        </div>
    )
}


ReactDOM.render(<Blog />, document.getElementById('root'))