let TextInput = () => {
    return (
        <div>
            <label for="your text">Text: </label>
            <input type="text" id="your text" name="your text"></input>
        </div>
    )
}

let YesNoRadio = () => {
    return (
        <div>
            <input type="radio"></input>
            <label for="yes">Yes</label><br />
            <input type="radio"></input>
            <label for="no">No</label><br />
        </div>
    )
}

let SubmitButton = () => {
    return (
    <div>
            <input type="submit" value="Submit"></input>
    </div>
    )
}

let Form = () => {
    return (
        <div>
            <form>
                <TextInput />
                <YesNoRadio />
                <SubmitButton />
            </form>
        </div>
    )
}


ReactDOM.render(<Form />, document.getElementById('root'))