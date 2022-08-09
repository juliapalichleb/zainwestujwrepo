import { useNavigate } from "react-router-dom";

const TableRow = ({ dataRow }) => {
    const { full_name } = dataRow;
    const navigate = useNavigate();

    return (
            <tr>
                <td>{full_name}</td>
                <td >----------------</td>
                <td>----------------</td>
                <td><button onClick={() => navigate("/SecondPage")}>-></button></td>
            </tr>
    )
}

export default TableRow;