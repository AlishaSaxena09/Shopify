import React from "react";
import { DATA } from "../data";

export default function ProductList(props) {
  return (
    <section>
      {DATA.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
}

const ProductCard = (props) => {
  return (
    <div>
      <h1>{props.item?.title}</h1>
    </div>
  );
};
