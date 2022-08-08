import {useEffect, useState} from "react";
import axios from "axios";
import { isEmpty } from "lodash";

function App() {
  const [data, setData] = useState([]);

  useEffect( () => {
    axios.get(`https://api.github.com/orgs/alibaba/repos?per_page=200`).then(({ data }) => setData(data));
  }, [])


  return (
    <div className="App">
      { !isEmpty(data) ? data[2].full_name : 'Loading...' }
    </div>
  );
}

export default App;
