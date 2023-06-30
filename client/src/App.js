import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/header";
import Register from "./pages/register";
import Login from "./pages/login";
import Blog from "./pages/allBlog";
import SingleBlog from "./pages/singleBlog";
import AddBlog from "./pages/addBlog";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singleBlog/:id" element={<SingleBlog />} />
          <Route path="/addBlog" element={<AddBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
