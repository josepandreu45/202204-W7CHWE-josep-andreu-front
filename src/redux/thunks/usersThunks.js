import axios from "axios";
import { loginActionCreator } from "../features/usersSlice";
import jwtDecode from "jwt-decode";

const loginThunk = (userData) => async (dispatch) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_URL}/users/login`,
    userData
  );

  const userInfo = jwtDecode(data.token);
  localStorage.setItem("token", data.token);

  dispatch(loginActionCreator(userInfo));
};

export default loginThunk;
