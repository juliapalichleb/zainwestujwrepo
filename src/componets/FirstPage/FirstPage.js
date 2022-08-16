import RepoTable from "../RepoTable/RepoTable";
import TablePagination from "../TablePagination/TablePagination"
import { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";

import './FirstPage.css';

const FirstPage = ({ data }) => {
    const dataInit = data.filter((repo, index) => index >= 0 && index < 9)
    const [dataPagination, setDataPagination] = useState(dataInit);

    return (
        <div className='tableContainer'>
            <Card sx={{ maxWidth: '600px',  minWidth: '600px'}}>
                <CardContent sx={{ display:'flex', alignItems:'center', flexDirection:'column' }}>
                    <Typography variant='h4'>Select repository</Typography>
                    <RepoTable data={dataPagination}/>
                    <TablePagination setDataPagination={setDataPagination} data={data} />
                </CardContent>
            </Card>
        </div>
    );
};

export default FirstPage;