import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextInput from "../../components/TextInput";
import FormButton from "../../components/FormButton";


export default function UsersForm({ onSendMessage }) {
  const [state] = useState({
    message: "",
    isImportant: false,
    title: "",
  });

 
  const sendMessage = (event) => {
    event.preventDefault();
    GetUsers();
    

    onSendMessage(state);
  };

  return (
    <form className="UsersForm" onSubmit={sendMessage}>
      <div className="UsersForm__row">
        <TextInput
          label={<div>GitHub username</div>}
          value={state.id}
          inputProps={{
            name: "GitHubUsername", id: "GitHubUsername", placeholder: "GitHub username"
          }}
        />
      </div>
      <div className="MessageForm__row">
        <FormButton type="submit">Send</FormButton>
      </div>
    </form>
  );
}

UsersForm.propTypes = {
  onSendMessage: PropTypes.func,
};

function GetUsers(){
  const [json, setJson ] = useState(null);
 

useEffect(() =>{
  fetch('https://github.com/facebook/react')
  .then(response => response.json())
  .then(json => setJson(json))
}, []);

return (
  <div>{json.map(item =>
    <div key={item.name}>{item.id}</div>
  )}</div>
);


}