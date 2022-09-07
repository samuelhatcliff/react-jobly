import CompanyCard from "./CompanyCard";
import JobCard from "./JobCard";
const Card = ({ type }) => {
    if (type === "company") {
        return (
            <div>
                <h3>Card</h3>
                <CompanyCard />
            </div>
        )
    }
    if (type === "job") {
        return (
            <div>
                <h3>Card</h3>
                <JobCard />
            </div>
        )
    }
}
export default Card