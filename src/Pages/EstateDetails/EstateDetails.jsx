import { useParams } from "react-router-dom";
import DataFetch from "../../DataFetch";
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { TbHomeStats } from "react-icons/tb";
import { RiCompasses2Fill } from "react-icons/ri";

const EstateDetails = () => {
  const [singleData, setSingleData] = useState({});
  // const []
  const { id } = useParams();

  const { data, loading } = DataFetch();
  useEffect(() => {
    if (data) {
      // console.log(data);
      console.log("card idtype", typeof id);
      const oneData = data.find((item) => item.id == id);
      setSingleData(oneData);
      console.log(oneData);
    }
  }, [data, id]);

  const {
    image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities
  } = singleData || {};
  console.log(estate_title);
  // const {djdj} = facilities;
  // console.log(facilities['0'],facilities[1],facilities[2],facilities[3]);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="Album"/></figure>
  <div className="card-body">
    <h1 className="card-title">{estate_title}</h1>
    <h2> <span className="font-bold">Location:</span> {location} </h2>
    <p> <span className="font-bold">Description:</span>{description} </p>
    <div className="flex justify-center gap-6">
      <div className="flex gap-2 items-center">
      <AiOutlineHome className="text-xl"/> {segment_name}
      </div>
      <div className="flex gap-2 items-center">
      <RiCompasses2Fill className="text-xl"/> {area}
      </div>
      <div className="flex gap-2 items-center">
      <TbHomeStats className="text-xl"/> {status}
      </div>
      <div className="flex gap-2 items-center">
      {price}
      </div>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
  );
};

export default EstateDetails;
