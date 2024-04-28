import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MyArtCraftList = () => {
  const { user } = useContext(AuthContext);
  const items = useLoaderData();
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    const filtered = items.filter(item => item.userUid.includes(user.uid));
    setMyItems(filtered);
  }, [])

  return (
    <div>
      <h3>MyArtCraftList</h3>
      <p>Data: {myItems.length}</p>
    </div>
  );
};

export default MyArtCraftList;