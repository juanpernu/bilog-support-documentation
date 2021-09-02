import Users from "../data/users";

export function login(loginData) {
  const { user, pass } = loginData;
  const [foundUser] = Users.filter((u) => u.user === user && u.pass === pass);
  if (!foundUser || (foundUser && !foundUser.enabled))
    return { success: false, user: {} };
  return { success: true, user: foundUser };
}
