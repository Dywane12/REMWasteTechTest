import './App.css'
import Navbar from "./components/Navbar.jsx";
import {strings} from "./strings/strings.js";
import CardList from "./components/CardList.jsx";

function App() {

  return (
    <>
        <Navbar />
        <h2>{strings.title}</h2>
        <h3 style={{ fontWeight: 400, color: '#969CA8' }}>{strings.subtitle}</h3>
        <CardList />
    </>
  )
}

export default App
