

type Props = {
    title: string,
    content : string
}

const Article = (props : Props) =>{
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
}
export default Article