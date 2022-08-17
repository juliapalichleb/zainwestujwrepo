import TableRowRepo from "../TableRowRepo/TableRowRepo";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const RepoTable = ({ data }) =>
    <Table sx={{maxWidth: 600}} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>Repository</TableCell>
                <TableCell>Invested </TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell></TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map((repo, i) => <TableRowRepo dataRow={repo} key={i}/>)}
        </TableBody>
    </Table>

export default RepoTable;