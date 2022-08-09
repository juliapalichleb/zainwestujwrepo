import { useNavigate } from "react-router-dom";

const TableRow = ({ dataRow }) => {
    const { full_name, url } = dataRow;
    const navigate = useNavigate();

    return (
            <tr>
                <tr>
                    <td>{full_name}</td>
                </tr>
                <tr>
                    <td>{url}</td>
                </tr>
                <td>----------------</td>
                <td>----------------</td>
                <td><button onClick={() => navigate("/SecondPage")}>-></button></td>
            </tr>
    )
}

export default TableRow;