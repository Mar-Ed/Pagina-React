import Button from "./components/Button";


function App() {
  return (
    <>
      <div  className="bg-slate-800">
        <h1 className="text-3xl font-bold underline bg-slate-500">Hello world!
          <Button name="Marcelo"/>
          <Button name="Rebeca"/>
          <Button name="Kim"/>

        </h1>
      </div>
    </>
  );
}

export default App;
