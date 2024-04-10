import Slider from "../../Shared/Slider";
import PropertyCards from "../PropertyCards";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const properties = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      <h1 className="text-5xl text-center mt-16 mb-6">Visit Our Luxurious Places</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {
        
        properties.map(property =><PropertyCards key={property.id} properties={property}></PropertyCards>)

      }
      </div>
    </div>
  );
};

export default Home;
