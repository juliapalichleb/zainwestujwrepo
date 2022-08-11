import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectedForm from "../SelectedForm/SelectedForm";
import { updateTableRepo } from "../../redux/repoSlice";

const ThreePage = () => {
    const selectedInformation = useSelector((state) => state.repoData.selectedRepository)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(updateTableRepo(selectedInformation))
        navigate('/')
    }
    return (
            <SelectedForm handleClick={handleClick} selectedInformation={selectedInformation}/>
    )
}

export default ThreePage;