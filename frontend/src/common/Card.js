import CompanyCard from "../companies/CompanyCard";
import JobCard from "../jobs/JobCard";
import { Card as MuiCard } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../common/Card.css'

const theme = createTheme({
    palette: {
        primary: {
            main: '#FEFEFE '
        }
    }
}
);

const Card = ({ type, data }) => {
    return (
        <MuiCard className="card" style={{ textAlign: 'center', padding: 3 }}>
            {type === "company" ? (<CompanyCard data={data} />) : (
                <JobCard data={data} />
            )}
        </MuiCard>
    )
}
export default Card