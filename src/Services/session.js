import { objectToSnake } from "../utils/utils";

const apiUrl = "http://api-organizable.herokuapp.com";

const loginUser = async (loginInfo) => {
  try {
    const response = await fetch(`${apiUrl}/login`, {
      method: "POST",
      body: JSON.stringify(loginInfo),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();

    if (response.ok) {
      return { data };
    } else {
      return { error: data.errors.message };
    }
  } catch (error) {
    return { error: "Network error" };
  }
};

const createUser = async (userData) => {
  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: "POST",
      body: JSON.stringify({ user: objectToSnake(userData) }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();

    if (response.ok) {
      return { response, data };
    } else {
      return { error: data.errors.message };
    }
  } catch (error) {
    return { error: "Network error" };
  }
};

export { loginUser, createUser };
