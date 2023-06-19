import { Routes , Route } from "react-router-dom";
import "./App.css";
import Countries from "./Component/Countries";
import Menu from "./Component/Menu";
import Home from "./Component/Home";
import Country1 from "./Component/Country1";
import NotFound from "./Component/NotFound";

function App() {
  return (
    <div>
    <Menu/>
      <div className="container">
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/Countries" Component={Countries}/>
          <Route path="/Country1/:code" Component={Country1}/>
          <Route path="*" Component={NotFound} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
