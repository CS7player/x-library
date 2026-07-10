import './App.css';
import { Button, ButtonLib, CheckBox, CheckBoxLib, DatePicker, DatePickerLib, Icon, TextField, TextFieldLib } from './library';

function App() {
  let username: TextField = new TextField('username', 'Enter the Username', 'Chandra');
  let testing: TextField = new TextField('Testing', 'Enter the Tester', '', 'password');
  username.setIcon(Icon.User);
  username.setIsMandatory(true);
  username.setInfoText('Testing information box');
  username.setDisabled(true);
  let printBtn: Button = new Button('Print');
  printBtn.setStartIcon(Icon.Bell);
  printBtn.setEndIcon(Icon.Bell);

  let cbOptions = { labelKey: 'name', valueKey: 'id' };
  let cbArray = [
    { id: 1, name: 'orange' },
    { id: 2, name: 'apple' },
    { id: 3, name: 'banana' },
  ];
  let cbObj :CheckBox = new CheckBox("test",cbOptions,cbArray,[3,2],true);
  cbObj.setDisabled(true)
  cbObj.setInfoText("tesing checkbox")
  let todayDate = new DatePicker("Today","",true);
    const printer = () => {
    console.log(username.value);
    console.log(cbObj.selectedValues);
  };
  return (
    <>
      <div>
        <TextFieldLib textfield={username} />
        <TextFieldLib textfield={testing} />
        <ButtonLib button={printBtn} eventHandler={printer} />
        <CheckBoxLib checkbox={cbObj}/>
        <DatePickerLib datepicker={todayDate}/>
      </div>
    </>
  );
}

export default App;
