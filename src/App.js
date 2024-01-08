import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App" style={{height:'100vh' ,backgroundColor:'#64b577', overflow:"auto"}}>
    {/* // <div className=" container-fluid bg-success h-100" > */}
      <Navbar title="TextCrafts" />
      <div className="container my-5 ">
        <TextForm heading="Enter your text below"/>
      </div>
    </div>
  );
}

export default App;
