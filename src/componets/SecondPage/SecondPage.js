import {useDispatch, useSelector} from 'react-redux'
import FormRepo from "../FormRepo/FormRepo";
import { updateTableRepo } from "../../redux/repoSlice";

const SecondPage = () => {
    const dataRow = useSelector((state) => state.repoData.selectedRepository)
    const table = useSelector((state) => state.repoData.repositories)

    const dispatch = useDispatch();
    const updatedUser = {
        id: dataRow.id,
        email: 'noweEmail',
        amount: 123
    };

    dispatch(updateTableRepo(updatedUser))
    // console.log(dataTable)
    console.log(table)
    return (
        <FormRepo dataRow={dataRow}/>
    )
}

export default SecondPage