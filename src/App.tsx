import Register from "./components/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {

  const userToken = localStorage.getItem("authToken");
  return (
    <Router>
      <Routes>
        {/* if user exists go to home */}
        <Route
          path="/"
          element={userToken ? <Home /> : <Navigate to="/login" />}
        />

        {/* if user doesn't exist go to login */}
        <Route
          path="/login"
          element={userToken  ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={userToken ? <Navigate to="/" /> : <Register />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
