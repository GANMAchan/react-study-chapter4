import { ColoredMessage } from "./components/ColoredMessage"

export const App = () => {
    const onClickButton = () => {
        alert('test')
    }

    const contentPinkStyle = {
        color: "pink",
        fontSize: "30px"
    }

    return (
        <>
            <h1 style={{ color: "red" }}>こんにちは</h1>
            <ColoredMessage></ColoredMessage>
            <p style={contentPinkStyle}>おはよう</p>
            <button onClick={onClickButton}>button</button>
        </>
    )
}
