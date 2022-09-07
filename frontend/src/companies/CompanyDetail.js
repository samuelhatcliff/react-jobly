import { useEffect, useState } from 'react';
import JoblyApi from '../api'
import List from '../common/List';
import Loading from '../common/Loading';

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

    if (!data && !search) {
        return (
            <div>
                <h1>Companies!</h1>
            </div>)
    }
    else {//search query hasn't been submitted
        return (
            <div>
                <h1>Companies!</h1>
                <List data={data} type="company" />
            </div>)
    }
}
export default CompanyDetail