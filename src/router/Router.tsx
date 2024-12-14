import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Success from '../components/Success';
import App from '../App';
function RouterConfig() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/success' element={<Success />} />
        <Route path='/error' element={<div>登录失败，请返回重新尝试</div>} />
      </Routes>
    </Router>
  );
}

export default RouterConfig;
