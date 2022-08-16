import { Link } from "react-router-dom";
import { OFFERS } from "../utils/constant";

export default function List() {
  return (
    <div className="py-10 px-20">
      <h2 className="text-center text-2xl my-4 font-bold">New Offers 🎉</h2>
      <div className="py-4 grid grid-cols-3 gap-10">
        {OFFERS.map((offer) => {
          return (
            <Link to="/products">
              <div className="px-5">
                <img alt="offer" src={offer.src}></img>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
