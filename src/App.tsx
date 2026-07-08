import "./App.css";
import ButtonLib from "./reusable-components/button/btn";

function App() {
  const receive = () => {
    console.log("hgjhjh");
  };
  return (
    <>
      <div>
        <h1>Hello</h1>
        <ButtonLib text="Chandra" eventEmiiter={receive} />
      </div>
    </>
  );
}

export default App;
