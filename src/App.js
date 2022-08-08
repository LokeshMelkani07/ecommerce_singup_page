import "./App.css";
import Favicon from "react-favicon";
import Singup from "./components/Singup";
import image from "../src/images/signup.png";
function App() {
  return (
    <>
      <Favicon url={image}></Favicon>
      <Singup />
    </>
  );
}

export default App;
