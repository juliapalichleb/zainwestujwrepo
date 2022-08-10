import { useNavigate } from "react-router-dom";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const TableRowRepo = ({ dataRow }) => {
    const { full_name, id } = dataRow;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/SecondPage',
            {
                state: {
                    full_name: full_name,
                    id: id
                }
            });
    }

    return (
            <TableRow>
                <TableCell>{full_name}</TableCell>
                <TableCell >----------------</TableCell>
                <TableCell>----------------</TableCell>
                <TableCell><button onClick={() => handleClick()}>-></button></TableCell>
            </TableRow>
    )
}

export default TableRowRepo;