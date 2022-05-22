import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "./components/LoginForm/LoginForm";
import { loginActionCreator } from "./redux/features/usersSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const userInfo = jwtDecode(token);
      dispatch(loginActionCreator(userInfo));
    }
  }, [dispatch]);
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
