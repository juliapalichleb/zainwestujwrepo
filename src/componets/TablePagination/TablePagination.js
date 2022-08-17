import { Pagination } from "@mui/material";

const TablePagination = ({ data, setDataPagination }) => {
    const perPage = 10;

    const handlePageChange = (event, page) => {
       const indexOfFirst = (page - 1) * 10;
       const indexOFLast = (indexOfFirst) + perPage;
       const dataPagination = data.filter((repo, index) => index >= indexOfFirst && index < indexOFLast);

        setDataPagination(dataPagination);
    }

    return (
     <Pagination count={perPage} onChange={handlePageChange} sx={{ marginTop: '10px' }}/>
    );
};

export default TablePagination;