import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import UserContext from '../user/UserContext.js';
import JoblyApi from '../api.js';

const JobCard = ({ data: { id, title, salary, equity, companyHandle } }) => {
    const { user } = useContext(UserContext);
    const username = user[0]
    const apps = user[2]
    let apply; //checking via the apply variable before setting 'applied' state prevents infinite re-renders
    if (apps.includes(id)) {
        apply = true
    } else {
        apply = false;
    }
    const [applied, setApplied] = useState(apply);

    //todo: get user applications
    //make an array/object and check if inside 
    //if inside, set applied to true
    async function applyToJob() {
        await JoblyApi.apply(id, username);
        setApplied(true);
    }

    return (
        <div>
            <h1>{title}</h1>
            <h2>{companyHandle}</h2>
            <li>Salary:{salary}
            </li>
            <li>Equity:{equity}
            </li>
            {applied ? (<Button disabled={true} variant="contained">Apply</Button>
            ) : (<Button onClick={applyToJob} variant="contained">Apply</Button>
            )}
        </div>
    )
}
export default JobCard