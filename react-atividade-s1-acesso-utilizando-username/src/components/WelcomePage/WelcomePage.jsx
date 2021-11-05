const WelcomePage = ({ user, setIsLoggedIn }) => {
  function HandleLogout() {
    setIsLoggedIn = setIsLoggedIn(false);
  }
  return (
    <div>
      <h1>Bem-vindo {user}</h1>
      <button onClick={HandleLogout}>Logout</button>
    </div>
  );
};

export default WelcomePage;
