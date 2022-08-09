import RepoTable from "../RepoTable/RepoTable";
import TablePagination from "../TablePagination/TablePagination"
import { useState } from "react";

import './FirstPage.css';

const FirstPage = ({ data }) => {
    const dataInit = data.filter((repo, index) => index >= 0 && index < 9)
    const [dataPagination, setDataPagination] = useState(dataInit);

    return (
        <div className='tableContainer'>
            <RepoTable data={dataPagination}/>
            <TablePagination setDataPagination={setDataPagination} data={data}/>
        </div>
    );
};

export default FirstPage;