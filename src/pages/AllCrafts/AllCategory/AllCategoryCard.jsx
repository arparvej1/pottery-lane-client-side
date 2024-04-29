import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllCategoryCard = ({category}) => {
   
  return (
    <div className='p-5 my-5 rounded-2xl border-2 border-info flex flex-col justify-between gap-3 bg-secondary-content'>
      <div className='flex flex-col gap-3'>
        <div className=''>
          {/* <img className='rounded-2xl' src={photo} alt={itemName} /> */}
        </div>
        <h3 className='font-semibold text-2xl'>{category}</h3>
        <div className='grid grid-cols-2 gap-3'>
          {/* <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <p>Stock Status: {stockStatus}</p>
          <p>Customization: {customization}</p> */}
        </div>
      </div>
      <Link to={`/sub-category/${category}`} className='btn bg-info text-accent-content'>View Details</Link>
    </div>
  );
};

AllCategoryCard.propTypes = {
  category: PropTypes.string
}

export default AllCategoryCard;