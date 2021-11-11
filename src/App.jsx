import { ColoredMessage } from "./components/ColoredMessage"

export const App = () => {
    const onClickButton = () => {
        alert('test')
    }

    return (
        <>
            <h1 style={{ color: "red" }}>こんにちは</h1>
            <ColoredMessage color="blue">これはpropsだよ</ColoredMessage>
            <ColoredMessage color="pink">私は元気です</ColoredMessage>
            <button onClick={onClickButton}>button</button>
        </>
    )
}
