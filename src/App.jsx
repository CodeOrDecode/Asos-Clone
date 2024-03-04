import Allroutes from "./Routes/Allroutes";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Allroutes />
    </>
  );
}

export default App;
