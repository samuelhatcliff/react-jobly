import '../common/Card.css'
import { useNavigate } from 'react-router-dom'
const CompanyCard = ({ data: { handle, name, description, logoUrl } }) => {
    const navigate = useNavigate();
    function goToJobs() {
        navigate(`/companies/${handle}`)
    }

    return (
        <div onClick={goToJobs}>
            <h1>{name}</h1>
            <h3>{description}</h3>
            <img src={logoUrl}></img>
        </div>
    )
}

export default CompanyCard