import {useState} from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
function App() {

    const [mode,setMode] = useState('light');
    const [alert,setAlert] = useState(null)

    const showAlert = (type,message) =>{
        setAlert({
            msg:message,
            type:type
        });
        setTimeout(() =>{
            setAlert(null);
            }
        ,2000)
    }
    const toggleSwitch = () => {
        if(mode === "dark"){
            setMode('light');
            document.body.style.backgroundColor = "white";
            showAlert("success","Light Mode enables");
        }else {
            setMode('dark');
            document.body.style.backgroundColor = "#2f3236";
            showAlert("success","Dark mode enabled");
        }

    }


  return (
    <div className="App">
        <Navbar title="TextUtils" mode={mode} toggleSwitch={toggleSwitch}/>
        <Alert alert={alert}/>
        <TextForm mode={mode} showAlert={showAlert}/>
    </div>
  );
}

export default App;
