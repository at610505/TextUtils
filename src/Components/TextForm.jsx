import {useState} from "react";
export default function TextForm(props){
    const [Text,setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("success","Text has been converted to Uppercase");
    }
    const handleLoClick = () => {
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("success","Text has been converted to Lowercase");

    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("success","Text has been Cleared");

    }

    const handleCaClick = () => {
        let newText = Text.split(" ")
        let camelCase = newText.map(capitalizeFirstLetter).join(" ");
        setText(camelCase);
        props.showAlert("success","Every Word has been capitalized");

    }
    const handleCopy = () => {
        let selectText = document.getElementById("exampleFormControlTextarea1");
        selectText.select();
        navigator.clipboard.writeText(selectText.value);
        props.showAlert("success","Text Has been Copied");

    }

    function capitalizeFirstLetter(string) {
        if (string.length<0){
            return null;
        }
        else {
            let lower = string.toLowerCase()
            return lower.charAt(0).toUpperCase()+lower.slice(1)
        }
    }

    return(
        <div className="container" >
            <div className="mb-3">
                <h1 htmlFor="exampleFormControlTextarea1" className="form-label" style={{color:props.mode==="dark"?"white":"black"}}>Example textarea</h1>
                <textarea style={{backgroundColor : props.mode==="dark"?"#34373b":"whitesmoke",color:props.mode==="dark"?"white":"black"}} className="form-control" value={Text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <button type="button" className={`btn btn-${props.mode==="dark"?"dark":"primary"} `} onClick={handleUpClick}>Upper Case</button>
            <button type="button" className={`btn btn-${props.mode==="dark"?"dark":"primary"} mx-2`} onClick={handleLoClick}>Lower Case</button>
            <button type="button" className={`btn btn-${props.mode==="dark"?"dark":"primary"} `} onClick={handleClearClick}>Clear Text</button>
            <button type="button" className={`btn btn-${props.mode==="dark"?"dark":"primary"} mx-2`} onClick={handleCaClick}>Capitalize Case</button>
            <button type="button" className={`btn btn-${props.mode==="dark"?"dark":"primary"} `} onClick={handleCopy}>Copy Text</button>

            <div style={{color : props.mode==="dark"?"white":"black"}}>
            <h3 className={"my-2"} >Text Summary</h3>
            <p>{Text.split(" ").length} words and {Text.length} characters in Text</p>
            <h2 className={"my-2"}>Preview of Text</h2>
            <p>{Text}</p>
            </div>
        </div>
    );
};