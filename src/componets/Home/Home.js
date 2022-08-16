import {useEffect, useRef} from "react";
import axios from "axios";
import { isEmpty } from "lodash";
import FirstPage from "../FirstPage/FirstPage";
import { useDispatch, useSelector } from "react-redux";
import { setRepositories } from "../../redux/repoSlice";
import {Box, CircularProgress} from "@mui/material";

const Home = () => {
    const stopEffectTwice = useRef(true);
    const dispatch = useDispatch();
    const { repositories } = useSelector((state) => state.repoData)

    const handlePost = (dataReduce) => {
      axios.post(`http://localhost:8000/test`, dataReduce
        ).then(resp => {
            console.log(resp.data);
        })
    }
    const handleGet = () => {
      axios.get(`http://localhost:8000/test`)
          .then(({ data }) => {
            console.log(data)
              // dispatch(setRepositories(data))
        })
    }

    const handleData = (data) => {
        const dataReduce = data.map(({ name, url, id }) => ({ id, name, url, invested:'---', email:'---' }));
        // handlePost(dataReduce);
        dispatch(setRepositories(dataReduce))
    }

    useEffect( () => {
        if(stopEffectTwice.current) {
            stopEffectTwice.current = false;
            console.log('hi')
            handleGet();
            axios.get(`https://api.github.com/orgs/alibaba/repos?per_page=200`).then(({ data }) => handleData(data));
        }
    },[])


    return (
        <div>
            { !isEmpty(repositories) ? <FirstPage data={repositories} /> : <Box sx={{ display:'flex', justifyContent:'center', marginTop:'200px'}}> <CircularProgress /> </Box>  }
        </div>
    );
};

export default Home;