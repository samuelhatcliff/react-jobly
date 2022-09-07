import { useEffect, useState } from 'react';
import JoblyApi from './api'
import CompanyList from './CompanyList';
import Loading from './Loading';

const CompanyDetail = () => {
    // const [SearchBy, setSearchBy] = searchTerm
    const [data, setData] = useState(null)
    useEffect(() => {
        async function fetchData() {
            const allCompanies = await JoblyApi.getAllCompanies();
            setData(allCompanies)
        }
        fetchData();
    }, []);

    if (!data) {
        return (
            <>
                <Loading />
            </>
        )
    }

    return (
        <div>
            <h1>Company Detail!</h1>
            <CompanyList data={data} />
        </div>
    )
}
export default CompanyDetail