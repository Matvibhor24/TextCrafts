// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App">
      <Navbar title="TextCrafts" />
      <div className="container my-5">
      <TextForm heading="Enter your text below"/>
      </div>
      
    </div>
  );
}

export default App;
