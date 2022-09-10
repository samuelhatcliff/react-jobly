import NavBar from './navbar/NavBar.js';
import RoutesComp from './routes/Routes.js'
import UserContext from './user/UserContext.js';

function AppComponents({ data }) {

    return (
        <div>
            <NavBar />
            <RoutesComp />
        </div>
    );
}

export default AppComponents;
