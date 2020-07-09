import React, { useState } from "react";
import {
  Form,
  PrimaryButton,
  Link,
  FormContainer,
} from "../styles/StyledComponents";
import FormInput from "../Molecules/FormInput";
import { createUser } from "../Services/session";

const SignUp = ({ setCurrentPage, setUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [error, setError] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    const { data, error } = await createUser(formData);
    console.log("data", data, "error", error);
    if (data) {
      setUser(data);
      setCurrentPage("profile");
    } else {
      setError(error);
    }
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
        <FormInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <FormInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <PrimaryButton style={{ marginTop: "16px" }}>Create!</PrimaryButton>
      </Form>
      {error && <p>{error}</p>}
      <Link style={{ marginTop: "16px" }}>Or login with existing user</Link>
    </FormContainer>
  );
};

export default SignUp;
