import { useEffect } from "react";
import axios from "axios";
import { isEmpty } from "lodash";
import FirstPage from "../FirstPage/FirstPage";
import { useDispatch, useSelector } from "react-redux";
import { setRepositories } from "../../redux/repoSlice";

const Home = () => {
    const dispatch = useDispatch();
    const { repositories } = useSelector((state) => state.repoData)

    const handleData = (data) => {
        const dataReduce = !isEmpty(repositories) ? repositories : data.map(({ name, url, id }) => ({ id, name, url, invested:'---', email:'---' }));
        dispatch(setRepositories(dataReduce))
    }

    useEffect( () => {
        axios.get(`https://api.github.com/orgs/alibaba/repos?per_page=200`).then(({ data }) => handleData(data));
    },[])

    return (
        <div>
            { !isEmpty(repositories) ? <FirstPage data={repositories} /> : 'Loading...' }
        </div>
    );
};

export default Home;