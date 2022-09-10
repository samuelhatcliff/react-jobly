import { Outlet } from 'react-router-dom';
import { useState, useContext } from 'react';
import UserContext from '../user/UserContext.js';
import CompanyDetail from './CompanyDetail';
import SearchModule from '../common/SearchModule';
import NotAuthorized from '../routes/NotAuthorized.js';
const Company = () => {
    const [search, setSearch] = useState(null);
    const { user } = useContext(UserContext)
    if (!user.length) {
        return (
            <NotAuthorized />
        )
    }
    return (
        <div>
            <h1>Rendering Company Component</h1>
            <Outlet />
            <SearchModule setSearch={setSearch} />
            <CompanyDetail search={search} />
        </div>
    )
}
export default Company

