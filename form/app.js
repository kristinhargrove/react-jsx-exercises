let TextInput = () => {
    return (
        <div>
            <form>
                <label for="your text">Text: </label>
                <input type="text" id="your text" name="your text"></input>
            </form>
        </div>
    )
}

let YesNoRadio = () => {
    return (
        <div>
            <form>
                <input type="radio"></input>
                <label for="yes">Yes</label><br />
                <input type="radio"></input>
                <label for="no">No</label><br />
            </form>
        </div>
    )
}

let SubmitButton = () => {
    return (
    <div>
        <form>
            <input type="submit" value="Submit"></input>
        </form>
    </div>
    )
}

let Form = () => {
    return (
        <div>
    <span>Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button </span>
    <TextInput />
    <YesNoRadio />
    <SubmitButton />
    </div>
    )
}


ReactDOM.render(<Form />, document.getElementById('root'))