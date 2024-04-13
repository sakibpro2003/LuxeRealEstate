import { NavLink } from "react-router-dom";
import { TbHomeStats } from "react-icons/tb";
const PropertyCards = ({ properties }) => {
  const {
    estate_title,
    image,
    id,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = properties;
  // <NavLink to={`/details/${id}`} className="btn btn-primary">Buy Now</NavLink>
  return (
    <div className="relative flex w-full flex-grow  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl">
      <div className="relative  mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img src={image} />
        <div className="absolute flex-grow  inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h5 className="block font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
            {estate_title}
          </h5>
          <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            5.0
          </p>
        </div>
        <p><span className="font-bold">Location:</span>{location} </p>
        
        <div className="flex   flex-grow items-center  mt-8 group font-bold">
        <div className="flex items-center flex-grow  gap-2"><TbHomeStats/> <p>{status}</p></div>
        <div className="flex items-center text-xl gap-2 text-blue-500"><p className="">{price}</p></div>
        </div>
      </div>
      
      <div className="p-6 pt-3">
        <NavLink
          to={`/details/${id}`}
          className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default PropertyCards;
