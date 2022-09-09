import React, { useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import UserContext from '../user/UserContext.js';

const JobCard = ({ data: { title, salary, equity, companyHandle } }) => {
    const username = useContext(UserContext)[0];
    //write useEffect that uses JoblyApi.apply() when button is clicked
    //get jobid from data
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