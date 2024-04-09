
const PropertyCards = ({properties}) => {
    const {estate_title} = properties;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/xJBW7dj/luxury-classic-modern-bedroom-suite-hotel.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default PropertyCards;