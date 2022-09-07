import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import CompanyDetail from './CompanyDetail';
import SearchModule from './SearchModule';

const Company = () => {
    console.log("RENDERING COMPANY")
    return (
        <div>
            <h1>Rendering Company Component</h1>
            <Outlet />
            {/* <SearchModule /> */}
            <CompanyDetail />
        </div>
    )
}
export default Company

