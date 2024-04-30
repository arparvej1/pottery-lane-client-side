import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Fade, Bounce } from "react-awesome-reveal";

const AllArtCraftItemsCard = ({ item }) => {
  const { _id, itemName, photo, price, rating, stockStatus, processingTime, subCategory } = item;

  return (
    <div className='p-5 my-5 rounded-2xl border-2 border-accent flex flex-col justify-between gap-3 bg-secondary-content'>
      <div className='flex flex-col gap-3'>
        <div className=''>
          <img className='rounded-2xl' src={photo} alt={itemName} />
        </div>
        <Bounce>
          <h3 className='font-semibold text-2xl'>{itemName}</h3>
        </Bounce>
        <div className='grid grid-cols-2 gap-3'>
          <Fade delay={1e3} cascade damping={1e-1}>
            <p>Price: {price}</p>
            <p>Status: {stockStatus}</p>
            <p>Category: {subCategory}</p>
            <p>Rating: {rating}</p>
          </Fade>
        </div>
        <div className='grid grid-cols-1 gap-3'>
          <Fade delay={1500} cascade damping={1e-1}>
            <p>Processing Time: {processingTime}</p>
          </Fade>
        </div>
      </div>
      <Link to={`/art-craft/${_id}`} className='btn bg-accent text-accent-content'>View Details</Link>
    </div>
  );
};

AllArtCraftItemsCard.propTypes = {
  item: PropTypes.object
}

export default AllArtCraftItemsCard;