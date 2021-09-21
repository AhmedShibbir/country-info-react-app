// import logo from './logo.svg';
import './App.css';
import Countries from './components/countries/Countries';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
     <Header></Header>
    <Countries></Countries>
    <Footer></Footer>
    </div>
  );
}

export default App;
