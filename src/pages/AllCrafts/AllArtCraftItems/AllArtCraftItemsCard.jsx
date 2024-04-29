import PropTypes from 'prop-types';

const AllArtCraftItemsCard = ({ item }) => {
  const { itemName, photo, price, rating, stockStatus, customization } = item;

  return (
    <div className='p-5 my-5 rounded-2xl border-2 border-accent flex flex-col justify-between gap-3 bg-secondary-content'>
      <div className='flex flex-col gap-3'>
        <div className=''>
          <img className='rounded-2xl' src={photo} alt={itemName} />
        </div>
        <h3 className='font-semibold text-2xl'>{itemName}</h3>
        <div className='grid grid-cols-2 gap-3'>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <p>Stock Status: {stockStatus}</p>
          <p>Customization: {customization}</p>
        </div>
      </div>
      <button className='btn bg-accent text-accent-content'>View Details</button>
    </div>
  );
};

AllArtCraftItemsCard.propTypes = {
  item: PropTypes.object
}

export default AllArtCraftItemsCard;