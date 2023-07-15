import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Verticals from "./pages/Verticals";
import Projects from "./pages/Projects"
import Blogs from "./pages/Blogs";
import Gallery from "./pages/Gallery"
import Contactus from "./pages/Contactus";
import NoMatch from "./pages/NoMatch";
import Layout from "./layout/layout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="verticals" element={<Verticals />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contactus />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
