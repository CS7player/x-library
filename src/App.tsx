import "./App.css";
import { Btn, ButtonLib } from "./reusable-components/button/btn";
import {
  TextField,
  TextFieldLib,
} from "./reusable-components/text-field/text-field";

function App() {
  let username: TextField = new TextField("username", "Enter the Username", "");
  let testing: TextField = new TextField("Testing", "Enter the Tester", "");

  let printBtn: Btn = new Btn("Print");
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
