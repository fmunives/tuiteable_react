/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import {
  Form,
  Label,
  Input,
  PrimaryButton,
  Link,
  WarningButton,
  Button,
} from "../styles/StyledComponents";

const ProfileUser = () => (
  <Form>
    <div>
      <Label htmlFor="username">Username</Label>
      <Input name="username" />
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
    <div
      css={css`
        display: flex;
        width: 100%;
        justify-content: space-between;
      `}
    >
      <Button>Edit</Button>
      <WarningButton>Cancel</WarningButton>
    </div>
    <div style={{ marginTop: "5px" }}>
      <Link>Or login with existing user</Link>
    </div>
  </Form>
);

export default ProfileUser;
