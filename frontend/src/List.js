import Card from "./Card"
const List = ({ data: data, type: type }) => {
    const list = data.map((comp) => {
        return (
            <div><Card type={type} data={comp} key={data.indexOf(comp)} />
                <p></p>
            </div>

        )
    })
    return (
        <>
            {list}
        </>
    )
}

export default List