import TableRowRepo from "../TableRowRepo/TableRowRepo";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@mui/material";

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
            {data.map((repo, i) => <TableRowRepo dataRow={repo} key={i} />)}
        </TableBody>
    </Table>

export default RepoTable;