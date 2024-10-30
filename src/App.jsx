
import Bloques from "./components/bloques";
import  Layaut  from "./components/Layaut";
import  Navbar  from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-slate-800 min-h-screen">
        <Navbar>  </Navbar>
        <Layaut>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor impedit, corporis aliquid deserunt tempore quisquam similique maiores nisi odit reiciendis quia harum aperiam fugit temporibus labore omnis illum dicta recusandae commodi quae magni mollitia natus tenetur? Laudantium atque sint eveniet perspiciatis eaque recusandae, modi iusto vel adipisci eius. Impedit, harum.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor impedit, corporis aliquid deserunt tempore quisquam similique maiores nisi odit reiciendis quia harum aperiam fugit temporibus labore omnis illum dicta recusandae commodi quae magni mollitia natus tenetur? Laudantium atque sint eveniet perspiciatis eaque recusandae, modi iusto vel adipisci eius. Impedit, harum.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor impedit, corporis aliquid deserunt tempore quisquam similique maiores nisi odit reiciendis quia harum aperiam fugit temporibus labore omnis illum dicta recusandae commodi quae magni mollitia natus tenetur? Laudantium atque sint eveniet perspiciatis eaque recusandae, modi iusto vel adipisci eius. Impedit, harum.</p>
        </Layaut>
        <Bloques/>
      </div>
    </>
  );
}

export default App;
