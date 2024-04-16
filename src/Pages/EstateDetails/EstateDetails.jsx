import { useParams } from "react-router-dom";
import DataFetch from "../../DataFetch";
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { TbHomeStats } from "react-icons/tb";
import { RiCompasses2Fill } from "react-icons/ri";
import { Helmet } from "react-helmet-async";

const EstateDetails = () => {
  const [singleData, setSingleData] = useState({});
  // const []
  const { id } = useParams();

  const { data, loading } = DataFetch();
  useEffect(() => {
    if (data) {
      // console.log(data);
      // console.log("card idtype", typeof id);
      const oneData = data.find((item) => item.id == id);
      setSingleData(oneData);
      // console.log(oneData);
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
    facilities,
  } = singleData || {};



  return (
    <div className="">
      <Helmet>
        <title>Estate Details</title>
      </Helmet>
      <div className="mt-12">
        <h1 className="text-center text-5xl mb-6">Estate Details</h1>
        <div className="card lg:card-side bg-base-100 shadow-2xl">
          <figure>
            <img src={image} alt="Album" />
          </figure>
          <div className="card-body">
            <h1 className="card-title">{estate_title}</h1>
            <h2>
              {" "}
              <span className="font-bold">Location:</span> {location}{" "}
            </h2>
            <p>
              {" "}
              <span className="font-bold">Description:</span>
              {description}{" "}
            </p>
            <p className="font-bold">Facilities</p>
            <div className="">
            <li>{facilities?.length&&facilities[0]}</li>
            <li>{facilities?.length&&facilities[1]}</li>
            <li>{facilities?.length&&facilities[2]}</li>
            <li>{facilities?.length&&facilities[3]}</li>
            
            </div>
            <div className="grid grid-cols-2 lg:flex justify-center gap-4">
              <div className="flex gap-2 items-center">
                <AiOutlineHome className="text-xl" /> {segment_name}
              </div>
              <div className="flex gap-2 items-center">
                <RiCompasses2Fill className="text-xl" /> {area}
              </div>
              <div className="flex gap-2 items-center">
                <TbHomeStats className="text-xl" /> {status}
              </div>
              <div className="flex gap-2 items-center">{price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
