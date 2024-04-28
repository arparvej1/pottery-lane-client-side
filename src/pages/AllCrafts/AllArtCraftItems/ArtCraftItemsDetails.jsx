import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const ArtCraftItemsDetails = () => {
  const { apiURL } = useContext(AuthContext);
  const [item, setItem] = useState({})
  const { itemId } = useParams();

  useEffect(() => {
    fetch(`${apiURL}/art-craft/${itemId}`)
      .then(res => res.json())
      .then(data => {
        setItem(data)
      })
  }, [])

  return (
    <div>
      <Helmet>
        <title> {item.itemName} | PotteryLane </title>
      </Helmet>
      <div>
        {/* ------------------ Start ------------ */}
        <div className='border-2 rounded-2xl my-5 md:my-10'>
          <div className='flex flex-col gap-3 md:gap-5 p-5 md:p-8 lg:p-10'>
            <div>
              <img className='rounded-2xl md:max-w-2xl lg:max-w-4xl mx-auto' src={item.photo} alt={item.itemName} />
            </div>
            <h4 className='font-semibold text-2xl'>
              {item.itemName}
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="flex gap-2">
                <p className="font-semibold">Sub Category:</p>
                <p>{item.subCategory}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Processing Time:</p>
                <p>{item.processingTime}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Price:</p>
                <p>{item.price}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Rating:</p>
                <p>{item.ating}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Customization:</p>
                <p>{item.customization}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Stock Status:</p>
                <p>{item.stockStatus}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">User Name:</p>
                <p>{item.userName}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">User Email:</p>
                <p>{item.userEmail}</p>
              </div>
            </div>
            <p>
              {
                item.shortDescription
              }
            </p>
            <p>
            </p>
          </div>
        </div>
        {/* ------------ End ------------- */}
      </div>
    </div>
  );
};

export default ArtCraftItemsDetails;