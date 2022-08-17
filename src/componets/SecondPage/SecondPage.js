import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

import { updateSelectedRepository } from "../../redux/repoSlice";
import FormRepo from "../FormRepo/FormRepo";

const SecondPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { selectedRepository } = useSelector((state) => state.repoData);

    const handleClick = ({ invested, email }) => {
        dispatch(updateSelectedRepository({ invested, email }))
        navigate('/ThirdPage')
    }

    return (
        <FormRepo handleClick={handleClick} selectedRepository={selectedRepository}/>
    )
}

export default SecondPage