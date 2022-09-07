import Card from "./Card"
const List = ({ data: data, type: type }) => {
    const list = data.map((comp) => {
        return (
            <><Card type={type} data={comp} key={data.indexOf(comp)} /></>
        )
    })
    return (
        <>
            {list}
        </>
    )
}

export default List