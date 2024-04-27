import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title> Home | PotteryLane </title>
      </Helmet>
      <h3>Hello Client Side</h3>
      <p>User: {users.length}</p>
    </>
  );
};

export default Home;