import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { isEmpty } from "lodash";
import FirstPage from "../FirstPage/FirstPage";
import { useDispatch, useSelector } from "react-redux";
import { setRepositories } from "../../redux/repoSlice";
import { Box, CircularProgress } from "@mui/material";

const Home = () => {
    const stopEffectTwice = useRef(true);
    const dispatch = useDispatch();
    const { repositories } = useSelector((state) => state.repoData)
    const [stop, setStop] = useState(false);
    const urlApi = `https://api.github.com/orgs/alibaba/repos?per_page=200`;

    const handleGet = (data) => {
         if (isEmpty(data)) {
             axios.get(urlApi).then(({ data }) => handleData(data))
         }else {
             dispatch(setRepositories(data))
             setStop(true)
         }
    }

    const handleData = (data) => {
        const dataReduce = data.map(({ name, url, id }) => ({ id, name, url, invested:'', email:'' }));
        axios.post(`http://localhost:8000/test`, dataReduce);
        dispatch(setRepositories(dataReduce))
        setStop(true)
    }

    useEffect( () => {
        if(stopEffectTwice.current) {
            stopEffectTwice.current = false;
            axios.get(`http://localhost:8000/test`).then(({ data }) => handleGet(data))
        }
    },[])

    return (
        <div>
            {(!isEmpty(repositories) && stop) ? <FirstPage data={repositories} /> : <Box sx={{ display:'flex', justifyContent:'center', marginTop:'200px'}}> <CircularProgress /> </Box> }
        </div>
    );
};

export default Home;