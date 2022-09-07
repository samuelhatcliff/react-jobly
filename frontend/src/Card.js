import CompanyCard from "./CompanyCard";
import JobCard from "./JobCard";
const Card = ({ type, data }) => {
    if (type === "company") {
        return (
            <div>
                <CompanyCard data={data} />
            </div>
        )
    }
    if (type === "job") {
        return (
            <div>
                <JobCard data={data} />
            </div>
        )
    }
}
export default Card