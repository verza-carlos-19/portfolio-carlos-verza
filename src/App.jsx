import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./componentes/AnimatedRoutes/AnimatedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
