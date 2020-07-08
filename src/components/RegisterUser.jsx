import React from "react";
import {
  Form,
  Label,
  Input,
  PrimaryButton,
  Link,
} from "../styles/StyledComponents";

const RegisterUser = () => (
  <Form>
    <div>
      <Label htmlFor="username">Username</Label>
      <Input name="username" />
    </div>
    <div>
      <Label htmlFor="password">Password</Label>
      <Input name="password" type="password" />
    </div>
    <div>
      <Label htmlFor="email">Email</Label>
      <Input name="email" type="email" />
    </div>
    <div>
      <Label htmlFor="firstName">First Name</Label>
      <Input name="firstName" />
    </div>
    <div>
      <Label htmlFor="lastName">Last Name</Label>
      <Input name="lastName" />
    </div>
    <PrimaryButton>Create!</PrimaryButton>
    <div style={{ marginTop: "5px" }}>
      <Link>Or login with existing user</Link>
    </div>
  </Form>
);

export default RegisterUser;
