
const CompanyCard = ({ data: { name, description, logoUrl } }) => {
    return (
        <>
            <div>
                <h1>{name}</h1>
                <h3>{description}</h3>
                <img src={logoUrl}></img>
            </div>
        </>
    )
}

export default CompanyCard