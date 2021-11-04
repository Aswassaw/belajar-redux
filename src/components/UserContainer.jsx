import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/users/userActions";

const UserContainer = () => {
  const users = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Users List</h1>
      {users.loading ? (
        // Jika masih loading
        <p>Loding Bruh...</p>
      ) : users.error ? (
        // Jika ada error
        <p>{users.error}</p>
      ) : (
        // Jika tidak ada error
        <ul>
          {users.users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default UserContainer;
