import './App.css';
import {makeStyles} from "@material-ui/core/styles";
import MainPage from "./pages/Main-page";
import Welcome from "./pages/Welcome";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";



const useStyles = makeStyles({
    container: {}
});

function App() {
    return (
        <div>
        <Routes>
            <Route path='/' element={<Welcome/>} />

            <Route path='/welcome' element={<MainPage/>} />

            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />

        </Routes>

        </div>

    );
}

export default App;
