import { useState } from "react";
import { useDispatch } from "react-redux";
import loginThunk from "../../redux/thunks/usersThunks";
import styled from "styled-components";

const LoginFormContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  form {
    padding: 15px;
    height: 250px;
    width: 200px;
    border-radius: 15px;
    border: 2px solid #166fe5;
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 5px;
  }
  label {
    color: #166fe5;
    font-weight: bold;
  }
  input {
    border: 3px solid #166fe5;
    border-radius: 15px;
  }

  .submit {
    margin-top: 15px;
    cursor: pointer;
    background-color: #166fe5;
    color: white;
    font-weight: bold;
  }
`;

const LoginForm = () => {
  const blankFields = {
    username: "",
    password: "",
  };
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(blankFields);

  const changeData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  const submitLogin = (event) => {
    event.preventDefault();
    dispatch(loginThunk(formData));
  };

  return (
    <LoginFormContainer>
      <form noValidate onSubmit={submitLogin}>
        <label htmlFor="username">User Name: </label>
        <input
          id="username"
          type="text"
          value={formData.username}
          onChange={changeData}
          autoComplete="off"
        />
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={changeData}
          autoComplete="off"
        />
        <input className="submit" type="submit" value={"ENTRAR"} />
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
