import { useState } from 'react';
import axios from './util/axios';

function App() {
  const [text, setText] = useState<string>();
  axios.get('/login/test').then((resp) => {
    setText(resp.data);
  });
  return <>{text}</>;
}
// Ov23liBIgLeG5aQTGvWB
// 32821f7b3ca388df754c3828d1df2ad462baadd9
export default App;
