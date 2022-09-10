import { useState, useContext, useEffect } from 'react';
import JoblyApi from '../api.js';
import UserContext from '../user/UserContext.js';
import NotAuthorized from '../routes/NotAuthorized.js';
import { useLocation } from 'react-router-dom'
import List from '../common/List.js';


const CompanyJobs = () => {
    const location = useLocation();
    const handle = location.pathname.replace('/companies/', '')
    const [companyData, setCompanyData] = useState(null)
    const { user } = useContext(UserContext);


    useEffect(() => {
        async function fetchData() {
            const company = await JoblyApi.getCompany(handle);
            setCompanyData(company.company)
        }
        fetchData();
    }, []);

    if (!user.length) {
        return (
            <NotAuthorized />
        )
    }

    return (
        <div>
            <List data={companyData.jobs} type="job" />
        </div>
    )
}
export default CompanyJobs

