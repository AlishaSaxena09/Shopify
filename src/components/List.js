import { Link } from "react-router-dom";
import { OFFERS } from "../utils/constant";

export default function List() {
  return (
    <div className="py-10 px-20">
      <h2 className="text-center text-2xl my-4 font-bold">New Offers 🎉</h2>
      <div className="py-4 grid grid-cols-2 gap-10">
        {OFFERS.map((path, src) => {
          return (
            <Link to={path}>
              <div className="px-5">
                <img src="/images/img1.jpeg"></img>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
