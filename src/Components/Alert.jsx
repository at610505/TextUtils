export default function Alert(props){
    function capitalizeFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }
    return(props.alert && <>
      <div className="alert alert-success" role="alert">
          {capitalizeFirstLetter(props.alert.type)} ! {props.alert.msg}
      </div>
     </>
    );
};