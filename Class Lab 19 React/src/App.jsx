import './App.css'
import Greeting from './components/Greeting'
function App() {
   prompt();
    function prompt() {
      let name = prompt = "Enter Your Name";
        return name;
    }
    if (prompt() === "") {
        prompt();
    }
  return (
    <>
    <input type="text" />
      <Greeting name = {prompt()} />
    </>
  )
}

export default App
