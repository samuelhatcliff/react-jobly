import { useState, useContext } from 'react';
import UserContext from '../user/UserContext.js';
import JobDetail from './JobDetail';
import { Outlet } from 'react-router-dom';
import SearchModule from '../common/SearchModule';
import NotAuthorized from '../routes/NotAuthorized.js';

const Job = () => {
    const [search, setSearch] = useState(null);
    const { user } = useContext(UserContext)
    if (!user.length) {
        return (
            <NotAuthorized />
        )
    }

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
