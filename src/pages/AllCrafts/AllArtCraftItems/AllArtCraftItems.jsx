import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AllArtCraftItems = () => {
  const { apiURL } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  console.log(items);

  useEffect(() => {
    fetch(`${apiURL}/art-craft`)
      .then(res => res.json())
      .then(data => {
        setItems(data)
      })
  }, [])
  
  return (
    <div>
      <Helmet>
        <title> All Art Craft Items | PotteryLane </title>
      </Helmet>
      <h3 className="bg-base-300 w-full p-5 md:p-8 text-2xl md:text-5xl font-bold text-center rounded-3xl my-5">All Art Craft Items </h3>
      <div className="max-w-3xl mx-auto">
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <th></th>
                <td>Item Name</td>
                <td>Sub Category</td>
                <td>Price</td>
                <td>Stock Status</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {
                items.map((item, idx) => <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>{item.itemName}</td>
                  <td>{item.subCategory}</td>
                  <td>{item.price}</td>
                  <td>{item.stockStatus}</td>
                  <td><Link to={`/art-craft/${item._id}`} className="btn btn-link">View Details</Link></td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default AllArtCraftItems;