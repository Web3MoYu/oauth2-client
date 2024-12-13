export default function Github() {
  const getCode = () => {
    const clientId = 'Ov23liBIgLeG5aQTGvWB';
    const url = 'https://github.com/login/oauth/authorize';
    const redirectUri = 'http://localhost:8080/api/oauth2/github'
    location.href = `${url}?client_id=${clientId}&redirect_uri=${redirectUri}`;
  };
  const login = () => {
    getCode();
  };

  return (
    <>
      <div>
        <button onClick={login}>Github</button>
      </div>
    </>
  );
}
