import { useEffect } from 'react';
import './App.css';
import Contenedor from './pages/Contenedor';
import { useDispatch } from 'react-redux';
import { getAllAsientos } from './redux/actions';


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllAsientos());
    },[]);

    return (
        <>
            <Contenedor />
        </>
    );
}

export default App;
