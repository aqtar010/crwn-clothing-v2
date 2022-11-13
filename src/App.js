import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/home.component";
import Shop from "./components/navbar-component/navbar.component";
import Navigation from "./routes/navigation-component/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />}/>
      </Route>
    </Routes>
  );
};

export default App;
