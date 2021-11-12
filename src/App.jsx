import { useState } from "react"
import { useEffect } from "react"
import { ColoredMessage } from "./components/ColoredMessage"

export const App = () => {
    const [ num, setNum ] = useState(0)
    useEffect(()=>{
        alert('test')
    }, [num])
    const onClickButton = () => {
        setNum(prev =>
            prev + 2
        )
    }

    return (
        <>
            <h1 style={{ color: "red" }}>こんにちは</h1>
            <ColoredMessage color="blue">これはpropsだよ</ColoredMessage>
            <ColoredMessage color="pink">私は元気です</ColoredMessage>
            <button onClick={onClickButton}>button</button>
            <p>{num}</p>
        </>
    )
}
