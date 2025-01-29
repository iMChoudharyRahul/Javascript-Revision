function User(userName, name, email) {
  this.userName = userName;
  this.name = name;
  this.email = email;

  console.log("Check This Object", this);
  return this;
}

const userOne = new User("rahul00", "rahul", "rahul@123");
console.log("first user", userOne);
console.log(constructor());
