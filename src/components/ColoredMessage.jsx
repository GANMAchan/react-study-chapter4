export const ColoredMessage = (props) => {
    const { color, children } = props

    const contentBlueStyle = {
        color,
        fontSize: "40px"
    }

    return <p style={contentBlueStyle}>{children}</p>
}