import { useEffect, useState } from "react";
import axios from "axios";
import { isEmpty } from "lodash";
import FirstPage from "../FirstPage/FirstPage";
import { useDispatch } from "react-redux";
import { setRepositories } from "../../redux/repoSlice";

const Home = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const handleData = (data) => {
        const dataReduce = data.map(({ name, url, id }) => ({ id, name, url, invested:'---', email:'---' }));
        setData(dataReduce)
        dispatch(setRepositories(dataReduce))
    }

    useEffect( () => {
        axios.get(`https://api.github.com/orgs/alibaba/repos?per_page=200`).then(({ data }) => handleData(data));
    },[])

    return (
        <div>
            { !isEmpty(data) ? <FirstPage data={data} /> : 'Loading...' }
        </div>
    );
};

export default Home;