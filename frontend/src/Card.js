import CompanyCard from "./CompanyCard";
import JobCard from "./JobCard";
import { Card as MuiCard } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const theme = createTheme({
    palette: {
        primary: {
            main: '#34deeb'
        }
    }
}
);

const Card = ({ type, data }) => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <MuiCard>
                    <Paper sx={{
                        ':hover': {
                            boxShadow: 6,
                        },
                        backgroundColor: 'primary.main',
                        borderRadius: 3,
                        boxShadow: 2
                    }} style={{ textAlign: 'center', padding: 3 }}>
                        {type === "company" ? (<CompanyCard data={data} />) : (
                            <JobCard data={data} />
                        )}
                    </Paper>
                </MuiCard>
            </ThemeProvider>
        </div>
    )
}
export default Card