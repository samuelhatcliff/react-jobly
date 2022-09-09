import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import UserContext from '../user/UserContext.js';
import JoblyApi from '../api.js';

const JobCard = ({ data: { id, title, salary, equity, companyHandle } }) => {
    const username = useContext(UserContext)[0];
    const [applied, setApplied] = useState(false)

    async function apply() {
        await JoblyApi.apply(id, username);
        setApplied(true);
    }
    //write useEffect that uses JoblyApi.apply() when button is clicked
    //get jobid from data
    return (
        <div>=
            <h1>{title}</h1>
            <h2>{companyHandle}</h2>
            <li>Salary:{salary}
            </li>
            <li>Equity:{equity}
            </li>
            {applied ? (<Button disabled={true} variant="contained">Apply</Button>
            ) : (<Button onClick={apply} variant="contained">Apply</Button>
            )
            }
        </div>
    )
}
export default JobCard