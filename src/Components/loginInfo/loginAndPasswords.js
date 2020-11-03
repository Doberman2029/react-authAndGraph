function receivLocalStorageData() {
  let json = localStorage.getItem("user");
  let registeredUser = json ? JSON.parse(json) : [];
  return registeredUser;
}

function usersInfo() {
  let storageUsers = receivLocalStorageData();

  let users = [
    ...storageUsers,
    {
      name: "Alex",
      password: "1234",
    },
    {
      name: "Dmitriy",
      password: "qwerty",
    },
    {
      name: "admin",
      password: "password",
    },
  ];

  return users;
}

export function addNewUserInLOcalStorage(name, password) {
  let storageUsers = receivLocalStorageData();
  storageUsers.push({ name, password });
  return localStorage.setItem("user", JSON.stringify(storageUsers));
}

export function authCheck(name, pass) {
  let users = usersInfo();

  let nameResult = users.filter((el) => el.name === name);

  let logIn =
    nameResult.length > 0
      ? nameResult.find((el) => el.password === pass)
        ? true
        : false
      : false;
  return logIn;
}
