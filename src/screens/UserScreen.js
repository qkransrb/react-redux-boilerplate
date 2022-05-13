import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../components/wrapper/Content";
import { fetchUsersAction } from "../redux/actions/userAction";

const UserScreen = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  const fetchUsersHandler = () => {
    dispatch(fetchUsersAction());
  };

  return (
    <Content>
      <h1>UserScreen</h1>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      <button
        className="bg-black/40 text-white px-4 py-1 rounded-sm"
        onClick={fetchUsersHandler}
      >
        Fetch Users
      </button>
    </Content>
  );
};

export default UserScreen;
