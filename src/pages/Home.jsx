import { useEffect, useState } from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import { fetchUsers } from "../features/user/userSlice";
import Card from "../components/Card";

export default function Home() {
  const { data, isLoading, errorMessage } =
    useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <section>
      <h1>Home</h1>
      <div>
        {data.map((user) => (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
          />
        ))}
      </div>
    </section>
  );
}
