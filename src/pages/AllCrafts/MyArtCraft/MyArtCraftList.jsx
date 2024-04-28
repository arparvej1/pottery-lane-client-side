import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import MyArtCraftListCard from "./MyArtCraftListCard";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title> My Art & Craft Items | PotteryLane </title>
      </Helmet>
      <h3 className="bg-base-300 w-full p-5 md:p-8 text-2xl md:text-5xl font-bold text-center rounded-3xl my-5">My Art & Craft Items </h3>
      {
        myItems.map(item => <MyArtCraftListCard key={item._id} item={item} 
          myItems={myItems} setMyItems={setMyItems}
        ></MyArtCraftListCard>)
      }
    </div>
  );
};

export default MyArtCraftList;