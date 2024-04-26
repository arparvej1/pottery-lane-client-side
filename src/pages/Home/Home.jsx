import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {
  const { apiURL } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${apiURL}/users`)
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })
  }, [])


  return (
    <>
      <h3>Hello Client Side</h3>
      <p>User: {users.length}</p>
    </>
  );
};

export default Home;