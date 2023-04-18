import React, { useState } from "react"

interface UserType {
  name: string;
  age: number;
}

export default function Test() {
  const [users, setUsers] = useState<UserType[]>([]);
  function submitHandler(e:any) {
    e.preventDefault();
    console.log("name" + e.target.name.value);
    console.log("age" + e.target.age.value)
    const newUser = {
      name: e.target.name.value,
      age: e.target.age.value,
    };
    console.log(newUser);
    fetch("http://localhost:3003/user/add", {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(newUser)
    });

    
  }

  function getAllUserHandler():void {
    fetch("http://localhost:3003/user/all")
    .then((response) => response.json())
    .then((res) => setUsers(res));
  }

  return (
    <div className="w-full h-100 bg-gray-500">
      <h1>Register user</h1>
      <form onSubmit={submitHandler}>
        <label>name:
          <input type="text" name="name" className="border border-red-500 block m-5" />
        </label>
        <label>
          age: 
          <input type="number" name="age" className="border border-red-500 m-5 block" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button onClick={getAllUserHandler}>Get all users</button>
      <ul>
        {users.map((user: UserType, index: number) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}