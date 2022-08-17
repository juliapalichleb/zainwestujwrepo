import { useDispatch, useSelector } from 'react-redux'
import FormRepo from "../FormRepo/FormRepo";
import { updateSelectedRepository } from "../../redux/repoSlice";
import { useNavigate } from "react-router-dom";

const SecondPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { selectedRepository } = useSelector((state) => state.repoData);

    const handleClick = ({ invested, email }) => {
        dispatch(updateSelectedRepository({ invested, email }))
        navigate('/ThreePage')
    }

    return (
            <FormRepo handleClick={handleClick} selectedRepository={selectedRepository}/>
    )
}

export default SecondPage