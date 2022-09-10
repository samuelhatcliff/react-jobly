import { useEffect, useState } from 'react';
import JoblyApi from '../api'
import List from '../common/List';

const JobDetail = ({ search }) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        async function fetchData() {
            let allJobs;
            if (search) {
                allJobs = await JoblyApi.getAllJobs(search);
            } else {
                allJobs = await JoblyApi.getAllJobs();
            }
            setData(allJobs)
        }
        fetchData();
    }, [search]);

    if (!data && !search) {
        return (
            <div>
                <h1>Jobs!</h1>
            </div>)
    }
    else {//search query hasn't been submitted
        return (
            <div>
                <h1>Jobs!</h1>
                <List data={data} type="job" />
            </div>)
    }
}
export default JobDetail