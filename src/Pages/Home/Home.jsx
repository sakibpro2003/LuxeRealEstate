import Navbar from "../../Shared/Navbar";
import Slider from "../../Shared/Slider";
import PropertyCards from "../PropertyCards";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const properties = useLoaderData();
  console.log(properties.length)
//   console.log(data.length);
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {
        
        properties.map(property =><PropertyCards key={property.id} properties={property}></PropertyCards>)

      }
      </div>
    </div>
  );
};

export default Home;
