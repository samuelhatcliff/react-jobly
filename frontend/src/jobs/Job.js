import { useState } from 'react';
import JobDetail from './JobDetail';
import { Outlet } from 'react-router-dom';
import SearchModule from '../common/SearchModule';

const Job = () => {
    const [search, setSearch] = useState(null);
    return (
        <div>
            <h1>Rendering Job Component</h1>
            <Outlet />
            <SearchModule setSearch={setSearch} />
            <JobDetail search={search} />
        </div>
    )
}
export default Job
