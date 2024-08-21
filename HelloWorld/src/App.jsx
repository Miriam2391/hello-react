import { Fragment } from "react"
import HolaMundo from "./componentes/HolaMundo";
import Mensaje from "./componentes/Mensaje";

function App(){

  return (
    <>
      <HolaMundo />
      <Mensaje />
      <HolaMundo />
    </>
  );

}

export default App;