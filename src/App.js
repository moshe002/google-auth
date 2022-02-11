import './App.css';
import { signInWithGoogle } from "./firebase.js";

function App() {
  return (
    <div className="App">
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")}/>
    </div>
  );
}

export default App;
