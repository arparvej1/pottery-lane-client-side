import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AllArtCraftItemsCard from "../AllArtCraftItems/AllArtCraftItemsCard";
import { AuthContext } from "../../../provider/AuthProvider";
import { ToastContainer } from "react-toastify";

const SelectedSubCategory = () => {
  const items = useLoaderData();
  const { category } = useParams();
  const [categoryItems, setCategoryItems] = useState([]);
  const { loginCheck } = useContext(AuthContext);

  useEffect(() => {
    const filtered = items.filter(item => item.subCategory.includes(category));
    setCategoryItems(filtered);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    loginCheck();
  }, []);

  return (
    <div>
      <Helmet>
        <title> {category} | PotteryLane </title>
      </Helmet>
      <h3 className="bg-base-300 w-full p-5 md:p-8 text-2xl md:text-5xl font-bold text-center rounded-3xl my-5">{category}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {
          categoryItems.sort(function () { return 0.5 - Math.random() }).map((item, idx) => <AllArtCraftItemsCard
            key={idx}
            item={item}
          ></AllArtCraftItemsCard>)
        }
      </div>
      <ToastContainer />
    </div>
  );
};

export default SelectedSubCategory;