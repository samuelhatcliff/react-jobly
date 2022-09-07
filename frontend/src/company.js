import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import CompanyDetail from './CompanyDetail';
import SearchModule from './SearchModule';

const Company = () => {
    const [search, setSearch] = useState(null);
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

