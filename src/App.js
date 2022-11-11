import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/home.component";
import NavBar from "./components/navbar-component/navbar.component";
import Navigation from "./routes/navigation-component/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<NavBar />} />
      </Route>
    </Routes>
  );
};

export default App;
