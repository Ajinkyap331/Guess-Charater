import { useState, useEffect } from "react";
import { Route, Routes, Switch, useNavigate } from "react-router-dom";
import { validateUser } from "./api";
import { app } from "./config/firebase.config";
import { getAuth } from "firebase/auth";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";

function App() {
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();

  const [{ user }, dispatch] = useStateValue();

  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("authMovie") === true
  );

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((e) => {
      if (e) {
        e.getIdToken().then((token) => {
          // console.log(token);
          validateUser(token).then((data) => {
            console.log(data);
            dispatch({
              type: actionType.SET_USER,
              user: data,
            });
          });
        });
      } else {
        setAuth(false);
        window.localStorage.setItem("auth", "false");
        dispatch({ type: actionType.SET_USER, user: null });
        navigate("/login");
      }
    });
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login setAuth={setAuth} />} />
    </Routes>
  );
}

export default App;
