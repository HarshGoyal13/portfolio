
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Nabar";
import { Banner } from "./components/Banner";
import  Skills  from "./components/skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ToolsUsed from './components/ToolsUsed';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <ToolsUsed/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
