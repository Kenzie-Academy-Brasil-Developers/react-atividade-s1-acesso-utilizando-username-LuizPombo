import { useState } from "react";
const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState("");
  function HandleLogin(userInput) {
    setUser = setUser(userInput);
    setIsLoggedIn = setIsLoggedIn(true);
  }
  return (
    <form>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button onClick={() => HandleLogin(userInput)}>Acessar com o nome</button>
    </form>
  );
};

export default GetUserComponent;
