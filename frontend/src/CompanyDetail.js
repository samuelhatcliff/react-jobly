import { useEffect, useState } from 'react';
import JoblyApi from './api'
import List from './List';
import Loading from './Loading';

const CompanyDetail = ({ search }) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        async function fetchData() {
            let allCompanies;
            if (search) {
                allCompanies = await JoblyApi.getAllCompanies(search);
            } else {
                allCompanies = await JoblyApi.getAllCompanies();
            }
            setData(allCompanies)
        }
        fetchData();
    }, [search]);

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
            <List data={data} type="company" />
        </div>
    )
}
export default CompanyDetail