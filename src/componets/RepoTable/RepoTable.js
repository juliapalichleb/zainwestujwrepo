import TableRow from "../TableRow/TableRow";

const RepoTable = ({ data }) =>
    <table>
        <thead>
            <tr>
                <th>Repository</th>
                <th>Invested </th>
                <th>E-mail</th>
            </tr>
        </thead>
        <tbody>
            {data.map((repo, i) => <TableRow dataRow={repo} key={i}/>)}
        </tbody>
    </table>

export default RepoTable;