import C01componente from "./components/C01componente";
import C02contador from "./components/C02contador";
import C03componenteConCss from "./components/C03compCss";
import EjemploDeEstado from "./components/C04estado";



function App() {
  return (
    <div>
      <C01componente />
      <hr />
      <C02contador />
      <hr />
      <C03componenteConCss/>
      <hr />
      <EjemploDeEstado />
    </div>
  );
}


export default App;
