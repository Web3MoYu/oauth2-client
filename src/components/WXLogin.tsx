import axios from '../util/axios';

export default function WXLogin() {
  const login = async () => {
    const resp = await axios.get('/oauth2/wx/qrcode');
    location.href = resp.data.qrcode;
  };

  return (
    <>
      <div>
        <button onClick={login}>微信登录</button>
      </div>
    </>
  );
}
