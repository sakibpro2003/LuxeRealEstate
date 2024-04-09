import { useParams } from "react-router-dom";
import DataFetch from "../../DataFetch";
import { useEffect, useState } from "react";

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
  } = singleData || {};
  console.log(estate_title);

  return (
    <div>
      <div className="container mt-32 mx-auto p-4 md:p-0">
        <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
          <div
            className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
            style={{
              backgroundImage:
                "url('https://images7.alphacoders.com/347/347549.jpg')",
            }}
          >
            <div className="absolute text-xl">
              <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
            </div>
          </div>
          <div className="bg-white w-full md:w-2/3">
            <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
              <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                  <h3>afjskjsfd</h3>
                  <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                    ashdfdshf
                  </p>
                  <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                </div>
                <div className="w-full lg:w-3/5 lg:px-3">
                  <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                    dfsd af asf fa dfsdaf sdf sdaf sdfasd fsda fsd fsd fsdafsdf
                    saf sfs sgd sdsgdgdgfdgdfhg gkjfklsjf klsdjf klsdjfksdjf
                    klsj fklsdjflksdj flksdj fklsj fklsdj lkf jsoifh duighuioaf
                    hsdifh sdj fisd jflksdj lkfjslkfjslakd jflkasj fa;lskj
                    flk;sad jflksad jflksdjflksj dlkj slkfjalkj
                  </p>
                </div>
                <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                  <button className="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">
                    Visit now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
