import Button from '@mui/material/Button';

const JobCard = ({ data: { title, salary, equity, companyHandle } }) => {

    return (
        <div>
            <h1>{title}</h1>
            <h2>{companyHandle}</h2>
            <li>Salary:{salary}
            </li>
            <li>Equity:{equity}
            </li>
            <Button variant="contained">Apply</Button>
        </div>
    )
}
export default JobCard