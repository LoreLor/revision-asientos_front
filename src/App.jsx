
import { useSelector } from "react-redux";
import "./App.css";
import Contenedor from "./pages/Contenedor";





function App() {

    const filtro = useSelector(state => state.asientos.filtro);
    console.log("filtrados", filtro);
  
    

    return (
        <>
            <Contenedor />
        </>
    );
}

export default App;
