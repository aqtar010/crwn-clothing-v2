import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/home.component";
import Shop from "./components/navbar-component/navbar.component";
import Navigation from "./routes/navigation-component/navigation.component";
import Authentication from "./routes/authentications/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />}/>      
      </Route>
    </Routes>
  );
};

export default App;
