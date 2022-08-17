import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectedForm from "../SelectedForm/SelectedForm";
import { updateTableRepo } from "../../redux/repoSlice";
import { useState } from "react";
import { Box, CircularProgress } from "@mui/material";

const ThreePage = () => {
    const { selectedInformation } = useSelector((state) => state.repoData)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const handleClick =  async () => {
        dispatch(updateTableRepo(selectedInformation))
        setLoading(false)
        await delay(1000);
        setLoading(true)
        navigate('/')
    }
    return (
        <>
            {loading ? <SelectedForm handleClick={handleClick} selectedInformation={selectedInformation}/> :
                <Box sx={{display:'flex', justifyContent:'center', marginTop:'200px'}}> <CircularProgress /> </Box> }
        </>
    )
}

export default ThreePage;