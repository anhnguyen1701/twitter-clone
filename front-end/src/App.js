import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import { useReducer } from 'react';
import AppReducer from './reducers/AppReducer';
function App() {
  const initialState = { user: null, posts: [] };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <Router>
      <div className="container">
        <Header></Header>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<Main />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
