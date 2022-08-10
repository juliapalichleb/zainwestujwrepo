import { useLocation } from 'react-router-dom';

const SecondPage = () =>{

    const location = useLocation();
    const {data} = location.state;

    return (
        <h2>Second Page {console.log(data)}</h2>
    )
}

export default SecondPage