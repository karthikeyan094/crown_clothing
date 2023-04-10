import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
const Head = () => {
  return <h1> this is head component</h1>
}
const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={ <Home/>} />
        <Route path="shop" element={<Head />} />
        <Route path="sign-in" element={<SignIn />} />

        </Route>
    </Routes>
  );
}

export default App;
