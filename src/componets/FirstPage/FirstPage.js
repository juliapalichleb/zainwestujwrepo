import { useEffect, useState } from "react";
import axios from "axios";
import RepoTable from "../RepoTable/RepoTable";

const FirstPage = () => {
    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get(`https://api.github.com/orgs/alibaba/repos?per_page=200`).then(({ data }) => setData(data));
    }, [])

    return (
        <div>
            {/*{ !isEmpty(data) ? data[2].full_name : 'Loading...' }*/}
            <RepoTable data={data}/>
        </div>
    );
};

export default FirstPage;