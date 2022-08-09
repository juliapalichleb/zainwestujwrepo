import { useEffect, useState } from "react";
import axios from "axios";
import { isEmpty } from "lodash";
import FirstPage from "../FirstPage/FirstPage";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get(`https://api.github.com/orgs/alibaba/repos?per_page=200`).then(({ data }) => setData(data));
    }, [])

    return (
        <div>
            { !isEmpty(data) ? <FirstPage data={data}/> : 'Loading...' }
        </div>
    );
};

export default Home;