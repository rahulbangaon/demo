import { BrowserRouter,Routes,Route } from "react-router-dom";

import "./App.scss";
import AddStudent from "./pages/addStudent/AddStudent";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import AllStudent from "./pages/allStudent/AllStudent";
import EditStudent from "./pages/editStudent/EditStudent";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="addStudent" element={<AddStudent/>} />
      <Route path="allStudent" element={<AllStudent/>} />
      <Route path="editStudent/:id" element={<EditStudent/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
