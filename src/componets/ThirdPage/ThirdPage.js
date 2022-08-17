import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectedForm from "../SelectedForm/SelectedForm";
import { updateTableRepo } from "../../redux/repoSlice";
import { useState } from "react";
import { Box, CircularProgress } from "@mui/material";

const ThirdPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { selectedRepository } = useSelector((state) => state.repoData)
    const [loading, setLoading] = useState(false);

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const handleClick = async () => {
        dispatch(updateTableRepo(selectedRepository))
        setLoading(true)
        await delay(1000);
        setLoading(false)
        navigate('/')
    }
    return !loading
                ? <SelectedForm handleClick={handleClick} selectedInformation={selectedRepository}/>
                : <Box sx={{display:'flex', justifyContent:'center', marginTop:'200px'}}><CircularProgress /></Box>
}

export default ThirdPage;