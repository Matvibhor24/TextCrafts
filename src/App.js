import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';

function App() {
  const[mode,setMode]=useState('light');
  const toggleMode =()=>{
    if (mode==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  const appStyle = {
    height:'100vh' ,
    backgroundColor: mode==='light'?'#d5e4dc':'#333', 
    overflow:"auto"
  }
  return (
    // <div className={`App bg-${mode}`} >
    <div className="App " style={appStyle}>
    {/* // <div className=" container-fluid bg-success h-100" > */}
      <Navbar title="TextCrafts" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-5 ">
        <TextForm heading="Enter your text below" mode={mode}/>
      </div>
    </div>
  );
}

export default App;
