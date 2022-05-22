import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { registerThunk } from "../../redux/thunks/usersThunks";

const RegisterFormContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  form {
    padding: 15px;
    height: 350px;
    width: 300px;
    border-radius: 15px;
    border: 2px solid #166fe5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 5px;
  }

  input {
    width: 200px;
    height: 30px;
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
  H2 {
    margin-top: -30px;
    margin-bottom: 30px;
    color: #166fe5;
    font-size: 22px;
  }
  .image {
    color: #166fe5;
    border: none;
    border-radius: 0;
  }
`;

const RegisterForm = () => {
  const blankFields = {
    username: "",
    password: "",
    name: "",
    image: "",
  };
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(blankFields);

  const changeData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };
  const submitRegister = (event) => {
    event.preventDefault();

    dispatch(registerThunk(formData));
  };

  return (
    <RegisterFormContainer>
      <form noValidate onSubmit={submitRegister}>
        <h2>SOCIAL NETWORK</h2>
        <input
          placeholder="name"
          id="name"
          type="text"
          value={formData.name}
          onChange={changeData}
          autoComplete="off"
        />
        <input
          placeholder="Username"
          id="username"
          type="text"
          value={formData.username}
          onChange={changeData}
          autoComplete="off"
        />

        <input
          placeholder="Password"
          id="password"
          type="password"
          value={formData.password}
          onChange={changeData}
          autoComplete="off"
        />
        <input
          className="image"
          placeholder="image"
          id="image"
          type="file"
          value={formData.igame}
          onChange={changeData}
          autoComplete="off"
        />
        <input className="submit" type="submit" value={"REGISTRARSE"} />
        <NavLink to="/login">Login</NavLink>
      </form>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
