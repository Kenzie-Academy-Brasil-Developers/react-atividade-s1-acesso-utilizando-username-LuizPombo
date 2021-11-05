import "./App.css";
import { useState } from "react";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import GetUserComponent from "./components/GetUserComponent/GetUserComponent";

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <div className="App-header">
        {IsLoggedIn ? (
          <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </div>
  );
}

export default App;
