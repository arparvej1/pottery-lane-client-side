import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AllArtCraftItems = () => {
  const { apiURL } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${apiURL}/art-craft`)
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title> All Art Craft Items | PotteryLane </title>
      </Helmet>
      <h3 className="bg-base-300 w-full p-5 md:p-8 text-2xl md:text-5xl font-bold text-center rounded-3xl my-5">All Art Craft Items </h3>
      <div className="max-w-4xl mx-auto">
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <th></th>
                <td className="md:text-sm lg:text-lg">Item Name</td>
                <td className="md:text-sm lg:text-lg">Sub Category</td>
                <td className="md:text-sm lg:text-lg">Price</td>
                <td className="md:text-sm lg:text-lg">Stock Status</td>
                <td className="md:text-sm lg:text-lg"></td>
              </tr>
            </thead>
            <tbody>
              {
                items.map((item, idx) => <tr key={item._id} className="md:text-sm lg:text-lg">
                  <th className="md:text-sm lg:text-lg">{idx + 1}</th>
                  <td className="md:text-sm lg:text-lg">{item.itemName}</td>
                  <td className="md:text-sm lg:text-lg">{item.subCategory}</td>
                  <td className="md:text-sm lg:text-lg">{item.price}</td>
                  <td className="md:text-sm lg:text-lg">{item.stockStatus}</td>
                  <td className="md:text-sm lg:text-lg"><Link to={`/art-craft/${item._id}`} className="btn btn-link">View Details</Link></td>
                </tr>)
              }
            </tbody>
          </table>
          {
            loading &&
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          }
        </div>
      </div>

    </div>
  );
};

export default AllArtCraftItems;