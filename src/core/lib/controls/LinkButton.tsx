export default function LinkButton(props) {
    return (
        <div>
            <button className="link" {...props}>{props.children}</button>
        </div>
    )
}
