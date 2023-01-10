import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import MyList from "./pages/MyList/MyList";
import ProgramInfo from "./pages/ProgramInfo/ProgramInfo";
import Programs from "./pages/Programs/Programs";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/programs" element={<Programs />}></Route>
          <Route path="/programs/:imdbID" element={<ProgramInfo />}></Route>
          <Route path="/mylist" element={<MyList />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
