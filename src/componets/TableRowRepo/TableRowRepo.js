import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useDispatch } from "react-redux";
import { setSelectedRepository } from "../../redux/repoSlice";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';

const TableRowRepo = ({ dataRow }) => {
    const { name, invested, email } = dataRow;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(setSelectedRepository(dataRow))
        navigate('/SecondPage')
    }

    return (
            <TableRow>
                <TableCell>{name}</TableCell>
                <TableCell >{invested}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>
                    <Button onClick={handleClick} variant="contained" size="small" sx={{ backgroundColor: '#808080' }} endIcon={<SendIcon />}>
                        invested
                    </Button>
                </TableCell>
            </TableRow>
    )
}

export default TableRowRepo;