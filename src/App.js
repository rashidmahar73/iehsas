import "./App.css";
import { Footer, Navbar } from "./components";
import Routing from "./Routes";

function App() {
  return (
    <div>
      <Navbar />
      <Routing/>
      <Footer/>
    </div>
  );
}

export default App;
