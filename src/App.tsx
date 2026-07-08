import './App.css';
import { Btn, ButtonLib, Icon, TextField, TextFieldLib } from './library';

function App() {
  let username: TextField = new TextField('username', 'Enter the Username', '');
  let testing: TextField = new TextField('Testing', 'Enter the Tester', '', 'password');
  username.setIcon(Icon.User);
  username.setIsMandatory(true);
  username.setInfoText('Testing information box');
  let printBtn: Btn = new Btn('Print');
  const printer = () => {
    console.log(username.value);
    console.log(testing.value);
  };
  return (
    <>
      <div>
        <TextFieldLib tf={username} />
        <TextFieldLib tf={testing} />
        <ButtonLib btn={printBtn} eventHandler={printer} />
      </div>
    </>
  );
}

export default App;
