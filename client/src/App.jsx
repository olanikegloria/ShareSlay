import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home/>} />
          </Routes>
      </Router>
    </Provider>
  );
};

export default App;
