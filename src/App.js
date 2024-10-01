import logo from "./dena.png";
import jaha from "./jaha.jpg";
import mia from "./mia.jpg";
import ahmed from "./ahmed.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>Svaka cast Dena, dobro si je otkrio! (scroll)</p>
        <p>Ovo je tvoj sljedeci clue:</p>
        <div className="non-spinning">
          <img
            src="https://www.domprojekt.hr/upload/tbl_tip_kuca/02_montazne_potkrovlje_232346.jpg.axd?width=800&height=470&crop=auto&quality=80"
            className="no-logo"
            alt="logo"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxf_Duggbx8fKVv-EXZTbeQmX63Vbnavkzg&s"
            className="no-logo"
            alt="logo"
          />
          <img src={jaha} className="no-logo" alt="logo" />
          <span>a</span>
        </div>
        <div className="non-spinning">
          <img src={ahmed} className="mia" alt="logo" />
          <img src={mia} className="mia" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
