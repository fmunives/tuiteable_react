import React, { useState } from "react";
import {
  Form,
  PrimaryButton,
  Link,
  FormContainer,
} from "../styles/StyledComponents";
import FormInput from "../Molecules/FormInput";
import { loginUser } from "../Services/session";

const Login = ({ setCurrentPage, setUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    const { data, error } = await loginUser(formData);
    console.log("data", data, "error", error);
    if (data) {
      setUser(data);
    } else {
      setError(error);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  }
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormInput
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
        />
        <PrimaryButton style={{ marginTop: "16px" }}>Login</PrimaryButton>
      </Form>
      {error && <p>{error}</p>}
      <Link style={{ marginTop: "16px" }}>Or create an account</Link>
    </FormContainer>
  );
};

export default Login;
