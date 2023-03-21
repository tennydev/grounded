import { Routes, Route} from "react-router-dom";

import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import Auth from "./components/routes/auth/auth.component";


const Shop = () => {
  return <h2> Shop !</h2>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path="auth" element= {<Auth/>}/>
      </Route>
    </Routes>
  );
};

export default App;
