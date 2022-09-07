import { useEffect, useState } from 'react';
import JoblyApi from './api'
import List from './List';
import Loading from './Loading';

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

    if (!data) {
        return (
            <>
                <Loading />
            </>
        )
    }

    return (
        <div>
            <div>
                <h1>Job Detail!</h1>
                <List data={data} type="job" />
            </div>
        </div>
    )
}
export default JobDetail