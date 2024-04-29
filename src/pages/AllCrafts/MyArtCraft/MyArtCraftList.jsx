import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import MyArtCraftListCard from "./MyArtCraftListCard";
import { Helmet } from "react-helmet-async";
import { IoIosArrowDown } from "react-icons/io";

const MyArtCraftList = () => {
  const { user } = useContext(AuthContext);
  const items = useLoaderData();
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    const filtered = items.filter(item => item.userUid.includes(user.uid));
    setMyItems(filtered);
  }, [])

  const handleFilter = (filterBy) => {
    if (filterBy === 'All') {
      const filtered = items.filter(item => item.userUid.includes(user.uid));
      setMyItems(filtered);
    } else {
      const filtered = items.filter(item => item.userUid.includes(user.uid) && item.customization.includes(filterBy));
      setMyItems(filtered);
    }
  }

  return (
    <div>
      <Helmet>
        <title> My Art & Craft Items | PotteryLane </title>
      </Helmet>
      <h3 className="bg-base-300 w-full p-5 md:p-8 text-2xl md:text-5xl font-bold text-center rounded-3xl my-5">My Art & Craft Items </h3>
      <div className='my-6 text-center'>
        <p>Customization</p>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] hover:bg-[#22be0ac5] text-white w-52">Filter By <IoIosArrowDown className='text-2xl' />
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link onClick={() => handleFilter('All')}>All</Link></li>
            <li><Link onClick={() => handleFilter('Yes')}>Yes</Link></li>
            <li><Link onClick={() => handleFilter('No')}>No</Link></li>
          </ul>
        </div>


      </div>
      <div className="max-w-5xl mx-auto">
        {
          myItems.map(item => <MyArtCraftListCard key={item._id} item={item}
            myItems={myItems} setMyItems={setMyItems}
          ></MyArtCraftListCard>)
        }
      </div>
    </div>
  );
};

export default MyArtCraftList;