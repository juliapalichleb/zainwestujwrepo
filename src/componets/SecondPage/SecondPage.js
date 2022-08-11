import { useDispatch } from 'react-redux'
import FormRepo from "../FormRepo/FormRepo";
import { updateSelectedRepository } from "../../redux/repoSlice";
import { useNavigate } from "react-router-dom";

const SecondPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = ({ invested, email }) => {
        dispatch(updateSelectedRepository({ invested, email }))
        navigate('/ThreePage')
    }

    return (
            <FormRepo handleClick={handleClick} />
    )
}

export default SecondPage