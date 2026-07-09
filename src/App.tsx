import './App.css';
import { Button, ButtonLib, Icon, TextField, TextFieldLib } from './library';

function App() {
  let username: TextField = new TextField('username', 'Enter the Username', '');
  let testing: TextField = new TextField('Testing', 'Enter the Tester', '', 'password');
  username.setIcon(Icon.User);
  username.setIsMandatory(true);
  username.setInfoText('Testing information box');
  let printBtn: Button = new Button('Print');
  printBtn.setStartIcon(Icon.Bell)
  printBtn.setEndIcon(Icon.Bell)
  const printer = () => {
    console.log(username.value);
    console.log(testing.value);
  };
  return (
    <>
      <div>
        <TextFieldLib textfield={username} />
        <TextFieldLib textfield={testing} />
        <ButtonLib button={printBtn} eventHandler={printer} />
      </div>
    </>
  );
}

export default App;
