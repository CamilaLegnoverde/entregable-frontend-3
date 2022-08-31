import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import React from 'react'
// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {
  const [cantidadProductosComprados, setNumero] = React.useState(0);

  const aumentarContadorDeProductos = () => {
    setNumero(cantidadProductosComprados + 1);
  }
  
  return (
    <div className="App">
      <Cabecera cantidadProductos={cantidadProductosComprados}/>
      <Listado aumentarContador = {aumentarContadorDeProductos}/>
    </div>
  );
}

export default App;
