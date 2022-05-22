import axios from "axios";
import {
  loginActionCreator,
  registerActionCreator,
} from "../features/userSlice";
import jwtDecode from "jwt-decode";

export const loginThunk = (userData) => async (dispatch) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_URL}/users/login`,
    userData
  );

  const userInfo = jwtDecode(data.token);
  localStorage.setItem("token", data.token);

  dispatch(loginActionCreator(userInfo));
};

export const registerThunk =
  ({ username, password, name, image }) =>
  async (dispatch) => {
    const body = {
      username,
      password,
      name,
      image,
    };
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/users/register`,
      body
    );
    dispatch(registerActionCreator(data));
  };
