const JobCard = ({ data: { title, salary, equity, companyHandle } }) => {

    return (
        <div>
            <h1>{title}</h1>
            <h2>{companyHandle}</h2>
            <ul>
                <li>Salary:{salary}
                </li>
                <li>Equity:{equity}
                </li>
            </ul>
            <h3>Apply Button</h3>
        </div>
    )
}
export default JobCard