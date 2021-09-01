import axios from 'axios';

const login = async (userName, userPassword) => {
  const userData = { userName, userPassword };
  const res = axios({
    method: 'post',
    url: "/api/users/login",
    body: JSON.stringify(userData),
  });

  // Throw error with status code in case Fetch API req failed
  if (!res.ok) {
    throw new Error(res.status);
  }

  const { data } = await res.json();
  return data;
};

export default login;
