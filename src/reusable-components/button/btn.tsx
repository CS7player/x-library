import "./btn.css";

function ButtonLib({ text, eventEmiiter }: any) {
  return (
    <>
      <button className="btn" onClick={() => eventEmiiter()}>
        {text}
      </button>
    </>
  );
}

export default ButtonLib;

/*
like @input() in angular 
we pass the value in child component in attribute tag only
but we receive them as the paramter in the main function

like @output() in angular 
in react we use output as callback function we direct pass the function 
as attrubute to the child component

like FormModule (two way binding) we use => useState
React components don't automatically remember variable values between renders.
Syntax :- const [state, setState] = useState(initialValue);
to render value use "state" -> Variable and to update we use "setState" -> function 
 in angular we use [(ngModel)]="value"

 useEffect() => ngOnInit()
 run when the main function called 


*/
